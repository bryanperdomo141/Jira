import React from 'react';
import SideBar from '../../pivot-report/editor/SideBar';
import RapidViewList from '../../../../components/RapidViewList';
import { Button, TextBox } from 'src/controls';

function ReportSettings({ settings: actualSettings, show, onHide, onDone }) {
    const [settings, updateSettings] = React.useState(actualSettings);
    const $this = React.useRef({});
    $this.current.settings = settings;

    const handleChange = React.useCallback((newSettings) => {
        const newState = { ...$this.current.settings, ...newSettings };
        updateSettings(newState);
    }, []);
    const setSprintBoards = React.useCallback((sprintBoards) => handleChange({ sprintBoards }), [handleChange]);
    const setNumeric = React.useCallback((value, field) => handleChange({ [field]: parseInt(value) || '' }), [handleChange]);

    const generateReport = React.useCallback(() => onDone($this.current.settings), []);

    return (
        <SideBar show={show} onHide={onHide} title="Report Config"
            controls={null} width="500" contentClassName="p-0">
            <div className="p-3">
                <label className="font-bold pb-2 block">Select Sprint Boards:</label>
                <RapidViewList value={settings.sprintBoards} multiple onChange={setSprintBoards} />
            </div>
            <div className="p-3">
                <label className="font-bold pb-2 block">Number of Sprints:</label>
                <TextBox value={settings.noOfSprints} field="noOfSprints" onChange={setNumeric} />
            </div>
            <div className="p-3">
                <label className="font-bold pb-2 block">Number of Sprints for velocity:</label>
                <TextBox value={settings.velocitySprints} field="velocitySprints" onChange={setNumeric} />
            </div>
            <div className="p-3"><Button className="float-end me-2" icon="fa fa-arrow-right"
                iconPos="right" label="Generate Report" disabled={!settings?.sprintBoards?.length}
                onClick={generateReport} title="Generated report for selected boards" />
            </div>
        </SideBar>
    );
}

export default ReportSettings;