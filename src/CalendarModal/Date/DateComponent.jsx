import React from 'react';
import styles from './DateComponent.module.scss';

export default function DateComponent({dateValue, dateIndex, isToday, isDisabled, selectedDate, onSelectDate}) {

    return (
        <button
            className={
                `${styles.Date} 
                 ${selectedDate === dateIndex ? styles.SelectedDate : ''} 
                 ${isToday ? styles.today : ''}`}
            onClick={isToday ? null : () => onSelectDate(dateIndex, dateValue)}
            disabled={isDisabled}>
            {new Date(dateValue).getDate()}
        </button>
    )
}