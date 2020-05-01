import React, {useState, useEffect} from 'react';
import styles from './TimeDropdown.module.scss';

export default function TimeDropdown() {
    const [times, setTimes] = useState([])

    const createTime = () => {
        const timeValues = [...times]
        for (let i = 0; i < 12; i ++) {
            if (i <= 3) {
                timeValues.push(`${i+9} AM`)
            } else {
                timeValues.push(`${i} PM`)
            }
        }
        setTimes(timeValues)
        console.log(timeValues);
    }

    useEffect(() => {createTime()},[]);

    return (
        <div className={styles.DropdownWrapper}>
            <h4>From </h4>
            <select className={styles.Dropdown}>
                {times.map(time => <option value={time} key={time}>{time}</option>)}
            </select>
            <h4>To </h4>
            <select className={styles.Dropdown}>
                {times.map(time => <option value={time} key={time}>{time}</option>)}
            </select>
        </div>
    )
}