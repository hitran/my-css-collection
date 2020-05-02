import React, {useState} from 'react';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './TimeSlider.module.scss';
import * as Utils from '../CalendarUtils';

export default function TimeSlider({handleTimeChange, start, end}){
    const [prevStartTime, setPrevStartTime] = useState(start);
    const [prevEndTime, setPrevEndTime] = useState(end);
    
    const handleSliderChange = (vals) => {
        console.log(vals);
        if (vals[0] !== prevStartTime && vals[1] === prevEndTime) {
            handleTimeChange(vals[0], Utils.START_TIME);
            setPrevStartTime(vals[0]);
        } else {
            handleTimeChange(vals[1], Utils.END_TIME);
            setPrevEndTime(vals[1]);
        }
    }

    return (
        <div className={styles.SliderWrapper}>
            <Range 
            min={9}
            max={20}
            defaultValue={[9, 20]}
            value={[start, end]}
            onChange={handleSliderChange}/>
        </div>
    )
}