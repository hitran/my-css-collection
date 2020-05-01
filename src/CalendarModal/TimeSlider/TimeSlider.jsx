import React, {useState} from 'react';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './TimeSlider.module.scss';

export default function TimeSlider(){
    const [startTime, setStartTime] = useState(9);
    const [endTime, setEndTime] = useState(19);
    const START = 'startTime';
    const END = 'endTime';
    
    const updateTimeValue = (value, type) => {
        switch (type) {
            case START :
                setStartTime(value)
                break;
            case END:
                setEndTime(value)
                break;
            default:
                return value;
        }
    }
    return (
        <div className={styles.SliderWrapper}>
            <Range min={0} max={10} defaultValue={[0, 10]} tipFormatter={value => value+9}/>
        </div>
    )
}