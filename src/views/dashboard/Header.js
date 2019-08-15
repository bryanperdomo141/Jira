import React, { PureComponent } from 'react';
import Button from '../../controls/Button';
import DashboardName from './DashboardName';
import { inject } from '../../services/injector-service';
import { showContextMenu } from "../../controls/ContextMenu";

class Header extends PureComponent {
    constructor(props) {
        super(props);
        inject(this, "DashboardService");
        this.state = this.getStateDetails(props);
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState(this.getStateDetails(newProps));
    }

    getStateDetails(props) {
        var { config, index } = props;

        var quickViewLink = {
            label: "Set as quick view", icon: config.isQuickView ? "fa-check-square" : "fa-square",
            disabled: config.isQuickView, command: () => this.setAsQuickView(quickViewLink)
        };

        this.contextMenu = [
            { label: "Create dashboard", icon: "fa fa-plus", command: () => this.$dashboard.createDashboard() },
            { label: "Delete dashboard", icon: "fa fa-trash-o", command: () => this.deleteDashboard(), disabled: index === 0 },
            {
                label: "Edit layout", icon: "fa fa-columns", command: () => {
                    this.showLayoutPopup = true;
                    this.selectedLayout = config.layout;
                }
            },
            quickViewLink
        ];

        return { config, index };
    }

    deleteDashboard() {
        this.$dashboard.deleteDashboard(this.state.index).then(uid => {
            this.props.history.push('/' + this.props.userId + '/dashboard/1');
        });
    }

    setAsQuickView(quickViewLink) {
        quickViewLink.disabled = true;
        quickViewLink.icon = 'fa-check-square';
        this.$dashboard.setAsQuickView(this.state.config, this.state.index);
    }

    nameChanged = (name, icon) => {
        var { index, config } = this.state;
        config.name = name;
        config.icon = icon;
        this.$dashboard.saveDashboardInfo(index, config, true);
    }

    render() {
        var { config: { icon, name } } = this.state;

        return (
            <>
                <div className="page-header">
                    <div className="pull-left"><DashboardName icon={icon} value={name} onChange={this.nameChanged} /></div>
                    <div className="pull-right">
                        <Button type="success" icon="fa fa-cubes" label="Add gadgets" onClick={this.props.onShowGadgets} />
                        <Button icon="fa fa-wrench" onClick={(e) => showContextMenu(e, this.contextMenu)} />
                    </div>
                </div>
            </>
        );
    }
}

export default Header;