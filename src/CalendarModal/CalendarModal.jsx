import React, { useState } from 'react';
import Dates from './Dates/Dates';
import TimeDropdown from './TimeDropdown/TimeDropdown';
import TimeSlider from './TimeSlider/TimeSlider';
import styles from './CalendarModal.module.scss';
import * as Utils from './CalendarUtils';

export default function CalendarModal() {
    const [startTime, setStartTime] = useState(9);
    const [endTime, setEndTime] = useState(20);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const updateTime = (value, type) => {
        switch (type) {
            case Utils.START_TIME:
                setStartTime(value);
                console.log('from master, start', value)
                break;
            case Utils.END_TIME:
                setEndTime(value);
                console.log('from master, end', value)
                break;
            default:
                return value
        }
    }

    const validateTime = (start, end) => {
        if (start > end) {
            return false;
        }
        return true;
    }

    const confirmDateTime = () => {
        if (validateTime(startTime, endTime)) {
            setConfirmationMessage('Valid Time')
        } else {
            setConfirmationMessage('Invalid Time')
        }
    }

    return (
        <div className={styles.CalendarModal}>
            <h1 className="Title">Calendar</h1>
            <p>Select date and time for your appointment</p>
            <p>{confirmationMessage}</p>
            <Dates />
            <TimeDropdown handleTimeChange={updateTime} start={startTime} end={endTime} />
            <TimeSlider handleTimeChange={updateTime} start={startTime} end={endTime} />
            <button className="btn btn-primary" onClick={confirmDateTime}>Confirm</button>
        </div>
    )
}