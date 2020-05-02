import React, {useState, useEffect} from 'react';
import styles from './TimeDropdown.module.scss';
import * as Utils from '../CalendarUtils';

export default function TimeDropdown({handleTimeChange, start, end}) {
    const [timeRange, setTimeRange] = useState([]);
    const [startTime, setStartTime] = useState(start);
    const [endTime, setEndTime] = useState(end);

    const createTimeRange = () => {
        const timeValues = [...timeRange];
        for (let i = 9; i <= 20; i ++) {
            timeValues.push(i);
        }
        setTimeRange(timeValues)
        console.log(timeValues);
    }

    useEffect(() => {createTimeRange()},[]);


    return (
        <div className={styles.DropdownWrapper}>
            <h4>From </h4>
            <select className={styles.Dropdown} onChange={e => handleTimeChange(e.target.value, Utils.START_TIME)} value={start}>
                {timeRange.map(time => <option value={time} key={time}>{Utils.timeFormatter(time)}</option>)}
            </select>
            <h4>To </h4>
            <select 
                className={styles.Dropdown}
                value = {end}
                onChange={e => handleTimeChange(e.target.value, Utils.END_TIME)}>

                {timeRange.map((time, i) => (
                <option 
                    value={time} 
                    selected={i === timeRange.length - 1 ? true : false } 
                    key={time}>{Utils.timeFormatter(time)}
                </option>)
                )}
            </select>
        </div>
    )
}