import React from 'react';
import { getSprintWiseSayDoRatio, getSettings } from './helper';
import GadgetLayout from '../../../gadgets/Gadget';
import ReportSettings from './settings';
import useToggler from 'react-controls/hooks/useToggler';
import { Column, NoDataRow, ScrollableTable, TBody, THead } from 'src/components/ScrollableTable';
import SayDoRatioChart from './SayDoRatioChart';

function SayDoRatioReport(props) {
    const [isLoading, setLoader] = React.useState(false);
    const [editMode, toggleEdit] = useToggler(true);
    const [settings, updateSettings] = React.useState(getSettings());
    const [reportData, setReportData] = React.useState([]);
    const $this = React.useRef({});
    $this.current.settings = settings;
    $this.current.toggleEdit = toggleEdit;

    const loadReportData = React.useCallback(async () => {
        try {
            setLoader(true);
            const reportData = await getSprintWiseSayDoRatio($this.current.settings);
            setReportData(reportData);
        } finally {
            setLoader(false);
        }
    }, []);
    $this.current.loadReportData = loadReportData;

    const applySettings = React.useCallback((newSettings) => {
        updateSettings(newSettings);
        $this.current.settings = newSettings;
        $this.current.loadReportData().then($this.current.toggleEdit);
    }, []);

    return (<>
        <ReportSettings settings={settings} show={editMode} onHide={toggleEdit} onDone={applySettings} />
        <div className="page-container">
            <GadgetLayout title="Say Do Ratio Report"
                isGadget={false} isLoading={isLoading}
                onRefresh={loadReportData}
            >
                <ScrollableTable dataset={reportData} exportSheetName="Say Do Ratio" containerStyle={{ height: 'auto', maxHeight: '70%' }}>
                    <THead>
                        <tr>
                            <Column sortBy="name">Board Name</Column>
                            <Column sortBy="sayDoRatio">Average</Column>
                            {loop(settings.noOfSprints, (i) => <Column key={i}>Sprint {i + 1}</Column>)}
                        </tr>
                    </THead>
                    <TBody>
                        {(b) => <tr key={b.id}>
                            <td>{b.name}</td>
                            <td>{b.sayDoRatio}</td>
                            {b.sprintList.map(s => (s?.sayDoRatio ? <td>{s.sayDoRatio}%</td> : <td>-</td>))}
                        </tr>}
                    </TBody>
                    <NoDataRow span={7}>No data available.</NoDataRow>
                </ScrollableTable>
                <div className="row">
                    {reportData?.map(b => <SayDoRatioChart key={b.id} board={b} />)}
                </div>
            </GadgetLayout>
        </div>
    </>);
}

export default SayDoRatioReport;

function loop(num, callback) {
    const result = [];

    for (let i = 0; i < num; i++) {
        result.push(callback(i));
    }

    return result;
}