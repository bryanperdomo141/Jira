import React, { PureComponent } from 'react';
import { Panel } from 'primereact/panel';
import $ from 'jquery';
import { EventEmitter } from 'events';
import Button from '../controls/Button';
import { showContextMenu } from '../controls/ContextMenu';
import "./BaseGadget.scss";

export const onDashboardEvent = new EventEmitter();

export class BaseGadget extends PureComponent {
    constructor(props, title, iconClass) {
        super(props);
        this.title = title;
        this.iconClass = iconClass;
        this.isGadget = props.isGadget !== false;
        this.settings = props.settings || {};
        this.bodyTag = $(document.body);
        this.state = {};
    }

    getContextMenu() {
        var { isFullScreen, fullWidth, fullHeight } = this.state;

        var gadgetActions = !this.isGadget ? [] : [
            { separator: true },
            { label: "Full width", icon: "fa fa-" + (fullWidth ? "check" : "remove"), command: () => this.setSizeOptions(!fullWidth, fullHeight) },
            { label: "Full height", icon: "fa fa-" + (fullHeight ? "check" : "remove"), command: () => this.setSizeOptions(fullWidth, !fullHeight) },
            { separator: true },
            { label: "Remove", icon: "fa fa-remove", command: () => this.removeGadget() }
        ];

        return [
            { label: "Refresh", icon: "fa fa-refresh", disabled: !this.refreshData, command: () => this.refreshData(true) },
            { label: "Export", icon: "fa fa-download", disabled: !this.exportData, command: () => this.exportData() },
            { label: "Toggle full screen", icon: "fa fa-" + (isFullScreen ? "collapse" : "expand"), command: () => this.toggleFullScreen() },
            ...gadgetActions
        ];
    }

    componentDidMount() {
        if (this.isGadget) {
            onDashboardEvent.on("change", this.eventReceived);
        }
        this.widgetCtl = $(this.el).closest('.widget-cntr');
        this.widgetHdrCtl = this.widgetCtl.find('div.ui-panel-titlebar.ui-widget-header');
    }

    eventReceived = (e) => this.executeEvent(e)

    componentWillUnmount() {
        onDashboardEvent.off("change", this.eventReceived);
    }

    onResize(event) {
        setTimeout(() => {
            this.totalHeight = this.isFullScreen ? window.innerHeight : this.widgetCtl.height();
            this.contentHeight = this.totalHeight + (this.hideHeader ? 0 : -((this.widgetHdrCtl.outerHeight() || 44) + 3));
        }, 20);
    }

    setSizeOptions(fullWidth, fullHeight) {
        this.setState({ fullWidth, fullHeight });
    }

    UNSAFE_componentWillReceiveProps(changes) {
        if (changes.layout) {
            this.onResize();
        }

        this.settings = changes.settings || {};
    }

    toggleFullScreen() {
        var { isFullScreen } = this.state;
        isFullScreen = !isFullScreen;
        if (isFullScreen) {
            this.bodyTag.addClass('fs-layout');
        }
        else {
            this.bodyTag.removeClass('fs-layout');
        }
        this.columnResizeMode = isFullScreen ? 'fit' : 'expand';
        this.setState({ isFullScreen });
        this.onResize();
    }

    performAction(type, data) {
        var { onAction } = this.props;
        if (onAction) { onAction({ type, data }, this.props.model, this.props.index); }
    }

    addWorklog(data) {
        this.performAction(GadgetActionType.AddWorklog, data);
    }

    addWorklogOn(ticketNo) {
        this.addWorklog({ ticketNo: ticketNo });
    }

    editWorklog(worklogId) {
        this.performAction(GadgetActionType.AddWorklog, { id: worklogId });
    }

    removeGadget = () => {
        this.performAction(GadgetActionType.RemoveGadget);
    }

    saveSettings() {
        this.performAction(GadgetActionType.SettingsChanged, this.settings);
    }

    executeEvent(action) {
        if (action.type === GadgetActionType.RemoveGadget) {
            this.onResize();
        }
    }

    getFullScreenButton() {
        if (this.isGadget) { return null; }
        var { state: { isFullScreen } } = this;
        return <Button icon={isFullScreen ? 'fa fa-compress' : 'fa fa-expand'} onClick={super.toggleFullScreen} title="Toggle full screen" />
    }

    getHeader = () => {
        var { title, subTitle, isGadget } = this;
        return <div onContextMenu={!isGadget ? null : (e) => showContextMenu(e, this.getContextMenu())}>
            <i className={'fa ' + this.iconClass}></i> {title} {subTitle && <span> - {subTitle}</span>}
            <div className="pull-right">
                {this.renderCustomActions && this.renderCustomActions()}
                {this.isGadget && <Button icon="fa fa-wrench" onClick={e => showContextMenu(e, this.getContextMenu())} />}
            </div>
        </div>;
    }

    renderBase(childern) {
        var { fullWidth, fullHeight, isLoading } = this.state;
        var { isGadget, isFullScreen } = this;

        var className = !isGadget ? "docked full-width full-height" : (fullWidth ? 'full-width' : 'half-width') + ' ' + (fullHeight ? 'full-height' : 'half-height');

        return (<div ref={el => this.el = el} className={'gadget ' + (isFullScreen ? 'full-screen ' : className)}>
            {isLoading && <div className="data-loader"><i className="fa fa-refresh fa-spin"></i></div>}
            <Panel header={this.getHeader()}>
                {childern}
                {this.renderFooter && this.renderFooter()}
            </Panel>
        </div>);
    }
}

export default BaseGadget;

export const GadgetActionType = {
    None: 0,
    AddWorklog: 1,
    WorklogModified: 2,
    DeletedWorklog: 3,
    TicketBookmarked: 10,
    SettingsChanged: 20,
    RemoveGadget: 100
};