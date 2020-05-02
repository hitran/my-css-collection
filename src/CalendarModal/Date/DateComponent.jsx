import React from 'react';
import styles from './DateComponent.module.scss';

export default function DateComponent({dateValue, dateIndex, isToday, selectedDate, onSelectDate}) {

    return (
        <span
            className={`${styles.Date} ${selectedDate === dateIndex ? styles.SelectedDate : ''} ${isToday ? styles.today : ''}`}
            onClick={isToday ? null : () => onSelectDate(dateIndex, dateValue)}>
            {new Date(dateValue).getDate()}
        </span>
    )
}