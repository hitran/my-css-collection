import React, { useState, useEffect } from 'react';
import styles from './Dates.module.scss';
import * as Utils from '../CalendarUtils';
import DateComponent from '../Date/DateComponent';

export default function Dates({ updateSelectedDate }) {
    const [thisMonthDates, setThisMonthDates] = useState([]);
    const [nextMonthDates, setNextMonthDates] = useState([]);
    const [currentSelectedDate, setCurrentSelectedDate] = useState(null);
    const today = new Date();
    const todayDay = today.getDate();
    const isSameMonth = (currentDate, dateToCheck) => {
        const toCheckMonth = new Date(dateToCheck).getMonth();
        const currentMonth = new Date(currentDate).getMonth();
        if (currentMonth !== toCheckMonth) {
            return false;
        }
        return true;
    }

    const isLastDayOfWeek = (date) => {
        console.log('date, today', date, today.getTime())
        if (date === today.getTime()) {
            console.log('today is not weekend')
            return false
        } else if (new Date(date).getDay() === 6) {
            return true
        }
        return false
    }

    const getStartDate = () => {
        const firstDay = today.getTime() - (6 - today.getDay())  * Utils.ONEDAY;
        return new Date(firstDay);
    }

    const addNextTenDatesToMonth = () => {
        let currentDateTime = getStartDate().getTime();
        const newThisMonth = [...thisMonthDates, currentDateTime];
        const newNextMonth = [...nextMonthDates];
        let activeDays = 0;
        const todayTime = today.getTime();
        while (activeDays < 10) {
            if (currentDateTime > todayTime) {
                activeDays += 1
                console.log(new Date(currentDateTime), activeDays)
            }
            const nextDateTime = Utils.getTmrTime(currentDateTime);
            newThisMonth.push(nextDateTime)
            // if (isSameMonth(currentDateTime, nextDateTime)) {
            //     newThisMonth.push(nextDateTime)
            // } else {
            //     newNextMonth.push(nextDateTime);
            // }
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

    const isDisabled = (date) => {
        if (new Date(date).getDate() < todayDay || 
            ((new Date(date).getDate() > todayDay) && (new Date(date).getMonth() < today.getMonth()))) {
                return true
        } 
        return false;
    }

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
                            isToday = {new Date(date).getDate() === todayDay ? true : false} 
                            isDisabled = {isDisabled (date) ? true : false}
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
                            isToday = {new Date(date).getDate() === todayDay ? true : false}
                            isDisabled = {isDisabled(date) ? true : false}
                            dateIndex ={i}
                            selectedDate = {currentSelectedDate}
                            onSelectDate = {handleSelectedDate}/>
                    )}
                </div> : null}
        </div>
    )
}