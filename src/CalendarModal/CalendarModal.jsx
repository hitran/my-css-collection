import React from 'react';
import Dates from './Dates/Dates';
import TimeDropdown from './TimeDropdown/TimeDropdown';
import TimeSlider from './TimeSlider/TimeSlider';
import styles from './CalendarModal.module.scss';

export default function CalendarModal() {
    return (
        <div className={styles.CalendarModal}>
            <h1 className="Title">Calendar</h1>
            <Dates/>
            <TimeDropdown/>
            <TimeSlider/>
        </div>
    )
}