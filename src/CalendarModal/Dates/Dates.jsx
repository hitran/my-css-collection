import React, {useState, useEffect} from 'react';
import styles from './Dates.module.scss';
import * as Utils from '../CalendarUtils';

export default function Dates() {
    const [thisMonthDates, setThisMonthDates] = useState([]);
    const [nextMonthDates, setNextMonthDates] = useState([]);

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
        for (let i = 0; i < 14; i++) {
            const nextDateTime = currentDateTime + 24 * 60 * 60 * 1000;
            if (isSameMonth(currentDateTime, nextDateTime)) {
                newThisMonth.push(nextDateTime)
            } else {
                newNextMonth.push(nextDateTime);
            }
            currentDateTime = nextDateTime;
        }
        setThisMonthDates(newThisMonth);
        setNextMonthDates(newNextMonth);
        console.log('this month', newThisMonth);
        console.log('next month', newNextMonth);
    }
    useEffect(() => {
        addNextTenDatesToMonth();
    },[]); 

    
    let thisMonthCalendar = null;
    let nextMonthCalendar = null;
    if (thisMonthDates.length > 0) {
        thisMonthCalendar = <div>
            <h5 className={styles.Month}>{Utils.months[new Date(thisMonthDates[0]).getMonth()]}</h5>
            {thisMonthDates.map((date,i) => (
                <span className={`${styles.Date} ${i=== 0 ? styles.today : ''}`} key={i}>{new Date(date).getDate()}</span>
            ))}
        </div>
    }

    if (nextMonthDates.length > 0) {
        nextMonthCalendar = <div>
            <h5 className={styles.Month}>{Utils.months[new Date(nextMonthDates[0]).getMonth()]}</h5>
            {nextMonthDates.map((date,i) => (
                <span className={styles.Date} key={i}>{new Date(date).getDate()}</span>
            ))}
        </div>
    }
    
   
    return (
        <div className={styles.Dates}>
            {thisMonthCalendar}
            {nextMonthCalendar}
        </div>
    )
}