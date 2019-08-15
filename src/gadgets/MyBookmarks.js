import React from 'react';
import BaseGadget from './BaseGadget';
import { GadgetActionType } from '.';
import { ScrollableTable, THead, TBody, Column, NoDataRow } from '../components/ScrollableTable';
import { showContextMenu } from '../controls/ContextMenu';
import { inject } from '../services/injector-service';
import { Button } from '../controls';
import AddBookmark from '../dialogs/AddBookmark';

class MyBookmarks extends BaseGadget {
    constructor(props) {
        super(props, 'Bookmark', 'fa-bookmark');
        inject(this, "JiraService", "BookmarkService", "UtilsService", "MessageService");

        this.contextMenu = [
            { label: "Select Bookmark", icon: "fa fa-check-square-o", command: () => this.selectTicket(this.selectedTicket) },
            { label: "Add worklog", icon: "fa fa-clock-o", command: () => this.addWorklogOn(this.selectedTicket.ticketNo) },
            { label: "Delete Bookmark", icon: "fa fa-trash-o", command: () => this.deleteBookmark(this.selectedTicket.ticketNo) } //ToDo: Add option for move to progress, show in tree view
        ];

        this.state = { selAllBks: false, bookmarksList: [] };
    }

    selectTicket(ticket) {
        ticket.selected = !ticket.selected;
        var { bookmarksList } = this.state;
        bookmarksList = [...bookmarksList];
        this.setState({ bookmarksList });
    }

    UNSAFE_componentWillMount() {
        this.refreshData();
    }

    refreshData = () => {
        this.setState({ isLoading: true, showAddPopup: false });

        this.$bookmark.getBookmarks()
            .then((result) => {
                result.forEach((b) => b.rowClass = this.$utils.getRowStatus(b));
                this.setState({ isLoading: false, bookmarksList: result });
            });
    }

    showContext($event, b) {
        this.selectedTicket = b;
        showContextMenu($event, this.contextMenu);
    }

    getRowStatus(d, index) {
        return d.rowClass;
    }

    selectAll = () => {
        var { bookmarksList, selAllChk } = this.state;
        selAllChk = !selAllChk;
        bookmarksList.forEach(wl => wl.selected = selAllChk);
        bookmarksList = [...bookmarksList];
        this.setState({ selAllChk, bookmarksList });
    }

    deleteBookmark(ticketNo) {
        var ids;
        if (ticketNo) {
            ids = [ticketNo];
        }
        else {
            ids = this.state.bookmarksList.filter((b) => { return b.selected; }).map((b) => { return b.ticketNo; });
        }
        if (ids.length === 0) {
            this.message.info("Select the bookmarks to be deleted!");
            return;
        }

        this.setState({ isLoading: true });
        this.$bookmark.removeBookmark(ids).then((result) => {
            this.setState({ bookmarksList: result, isLoading: false });
        });
    }

    executeEvent(action) {
        if (action.type === GadgetActionType.TicketBookmarked) {
            this.refreshData();
        }
        else {
            super.executeEvent(action);
        }
    }

    showAddPopup = () => this.setState({ showAddPopup: true });
    hideAddPopup = (added) => {
        if (added) {
            this.refreshData();
        } else {
            this.setState({ showAddPopup: false });
        }
    }

    renderCustomActions() {
        return <>
            <Button icon="fa fa-plus" onClick={this.showAddPopup} title="Add ticket to bookmarks" />
            <Button type="danger" icon="fa fa-trash-o" onClick={() => this.deleteBookmark()} title="Remove selected ticket(s) from bookmarks" />
        </>
    }

    render() {
        var { bookmarksList, selAllChk, showAddPopup } = this.state;

        return super.renderBase(<>
            <ScrollableTable dataset={bookmarksList}>
                <THead>
                    <tr>
                        <Column className="w40"><input type="checkbox" checked={selAllChk} onChange={this.selectAll} /></Column>
                        <Column sortBy="ticketNo">Ticket No</Column>
                        <Column sortBy="issuetype">Type</Column>
                        <Column sortBy="summary">Summary</Column>
                        <Column sortBy="assigneeName">Assignee</Column>
                        <Column sortBy="reporter">Reporter</Column>
                        <Column sortBy="priority">Priority</Column>
                        <Column sortBy="status">Status</Column>
                        <Column sortBy="resolution">Resolution</Column>
                        <Column sortBy="createdSortable">Created</Column>
                        <Column sortBy="updatedSortable">Updated</Column>
                    </tr>
                </THead>
                <TBody>
                    {(b, i) => {
                        return <tr key={b.ticketNo} onContextMenu={(e) => this.showContext(e, b)}>
                            <td className="text-center">
                                {b.selected && <input type="checkbox" checked={true} onChange={() => this.selectTicket(b)} />}
                                {!b.selected && <i className="fa fa-ellipsis-v" onClick={(e) => this.showContext(e, b)}></i>}
                            </td>
                            <td>
                                <a href={b.ticketNo} rel="noopener noreferrer" className="link strike" target="_blank">{b.ticketNo}</a>
                            </td>
                            <td>{b.issuetypeIcon && <img className="img-x16" src={b.issuetypeIcon} alt={b.issuetype} />}{b.issuetype}</td>
                            <td>{b.summary}</td>
                            <td>{b.assigneeName}</td>
                            <td>{b.reporterName}</td>
                            <td>{b.priorityIcon && <img className="img-x16" src={b.priorityIcon} alt={b.priority} />}{b.priority}</td>
                            <td>{b.statusIcon && <img className="img-x16" src={b.statusIcon} alt={b.status} />}{b.status}</td>
                            <td>{b.resolutionIcon && <img className="img-x16" src={b.resolutionIcon} alt={b.resolution} />}{b.resolution}</td>
                            <td>{b.created}</td>
                            <td>{b.updated}</td>
                        </tr>
                    }}
                </TBody>
                <NoDataRow span={11}>You have not yet bookmarked any tickets.Bookmark your frequently used tickets</NoDataRow>
            </ScrollableTable>
            {showAddPopup && <AddBookmark onHide={this.hideAddPopup} />}
        </>
        );
    }
}

export default MyBookmarks;