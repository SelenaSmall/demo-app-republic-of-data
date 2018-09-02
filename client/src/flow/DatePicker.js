import React, { Component } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { format, addDays } from 'date-fns';

function formatDateDisplay(date, defaultText) {
    if (!date) return defaultText;
    return format(date, 'MM/DD/YYYY');
}

export default class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            multipleRanges: {
                selection1: {
                    startDate: addDays(new Date(), 1),
                    endDate: null,
                    key: 'selection1',
                },
                selection2: {
                    startDate: addDays(new Date(), 4),
                    endDate: addDays(new Date(), 8),
                    key: 'selection2',
                },
                selection3: {
                    startDate: addDays(new Date(), 8),
                    endDate: addDays(new Date(), 10),
                    key: 'selection3',
                    showDateDisplay: false,
                    autoFocus: false,
                },
            },
        };
    }

    handleRangeChange(which, payload) {
        console.log(which, payload);
        this.setState({
            [which]: {
                ...this.state[which],
                ...payload,
            },
        });
    }

    render() {
        return (
            <section>
                <div>
                    <h2>DateRangePicker - Multiple Range</h2>
                    <label className={'label'}>Selection1 Start:</label>
                    <input
                        type="text"
                        readOnly
                        value={formatDateDisplay(this.state.multipleRanges.selection1.startDate, '-')}
                    />

                    <label className={'label'}>Selection1 End:</label>
                    <input
                        type="text"
                        readOnly
                        value={formatDateDisplay(this.state.multipleRanges.selection1.endDate, 'Continuous')}
                    />

                    <div className={'newLine'} />

                    <label className={'label'}>Selection2 Start:</label>
                    <input
                        type="text"
                        readOnly
                        value={formatDateDisplay(this.state.multipleRanges.selection2.startDate, '-')}
                    />

                    <label className={'label'}>Selection2 End:</label>
                    <input
                        type="text"
                        readOnly
                        value={formatDateDisplay(this.state.multipleRanges.selection2.endDate, 'Continuous')}
                    />
                    <div className={'newLine'} />

                    <label className={'label'}>Selection3 Start:</label>
                    <input
                        type="text"
                        readOnly
                        value={formatDateDisplay(this.state.multipleRanges.selection3.startDate, '-')}
                    />
                    <label className={'label'}>Selection3 End:</label>
                    <input
                        type="text"
                        readOnly
                        value={formatDateDisplay(this.state.multipleRanges.selection3.endDate, 'Continuous')}
                    />
                </div>

                <DateRangePicker
                    onChange={this.handleRangeChange.bind(this, 'multipleRanges')}
                    ranges={[
                        this.state.multipleRanges.selection1,
                        this.state.multipleRanges.selection2,
                        this.state.multipleRanges.selection3,
                    ]}
                    months={1}
                    minDate={addDays(new Date(), -300)}
                    maxDate={addDays(new Date(), 900)}
                    direction="vertical"
                    scroll={{ enabled: true }}
                    className={'PreviewArea'}
                />
            </section>
        );
    }
}