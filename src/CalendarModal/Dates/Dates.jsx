import React, { useState, useEffect } from 'react';
import styles from './Dates.module.scss';
import * as Utils from '../CalendarUtils';
import DateComponent from '../Date/DateComponent';

export default function Dates({ updateSelectedDate }) {
    const [thisMonthDates, setThisMonthDates] = useState([]);
    const [nextMonthDates, setNextMonthDates] = useState([]);
    const [currentSelectedDate, setCurrentSelectedDate] = useState(null);

    const isSameMonth = (currentDate, dateToCheck) => {
        const toCheckMonth = new Date(dateToCheck).getMonth();
        const currentMonth = new Date(currentDate).getMonth();
        if (currentMonth !== toCheckMonth) {
            return false;
        }
        return true;

    }
    const addNextTenDatesToMonth = () => {
        let currentDateTime = new Date().getTime();
        const newThisMonth = [...thisMonthDates, currentDateTime];
        const newNextMonth = [...nextMonthDates];
        for (let i = 0; i < 13; i++) {
            const nextDateTime = Utils.getTmrTime(currentDateTime);
            if (isSameMonth(currentDateTime, nextDateTime)) {
                newThisMonth.push(nextDateTime)
            } else {
                newNextMonth.push(nextDateTime);
            }
            currentDateTime = nextDateTime;
        }
        setThisMonthDates(newThisMonth);
        setNextMonthDates(newNextMonth);
    }

    const handleSelectedDate = (i, date) => {
        setCurrentSelectedDate(i);
        updateSelectedDate(date);
    }

    useEffect(() => {
        addNextTenDatesToMonth();
    }, []);


    return (
        <div className={styles.Dates}>
            {/* This month */}
            {thisMonthDates.length > 0 ?
                <div>
                    <h5 className={styles.Month}>
                        {Utils.months[new Date(thisMonthDates[0]).getMonth()].toUpperCase()}, 
                        {new Date(thisMonthDates[0]).getFullYear()}
                    </h5>
                    {Utils.days.map(day => (
                        <span
                            className={`${styles.Date} ${styles.DayOfWeek}`}
                            key={day}>
                            {day}
                        </span>
                    ))}
                    {thisMonthDates.map((date, i) => 
                        <DateComponent
                            key={i}
                            dateValue={date}
                            dateIndex = {i}
                            isToday = {i === 0 ? true : false} 
                            onClick={(i, date) => handleSelectedDate(i, date)}
                            selectedDate = {currentSelectedDate}
                            onSelectDate = {handleSelectedDate}/>
                    )}
                </div> : null}

            {/* Next month */}
            {nextMonthDates.length > 0 ?
                <div>
                    <h5 className={styles.Month}>
                        {Utils.months[new Date(nextMonthDates[0]).getMonth()].toUpperCase()}, 
                        {Utils.months[new Date(nextMonthDates[0]).getFullYear()]}
                    </h5>
                    {Utils.days.map(day => (
                        <span
                            className={`${styles.Date} ${styles.DayOfWeek}`}
                            key={day}>
                            {day}
                        </span>
                    ))}
                    {nextMonthDates.map((date, i) => 
                        <DateComponent
                            key={i}
                            dateValue={date}
                            isToday = {i === 0 ? true : false}
                            dateIndex ={i}
                            selectedDate = {currentSelectedDate}
                            onSelectDate = {handleSelectedDate}/>
                    )}
                </div> : null}
        </div>
    )
}