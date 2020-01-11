import React from 'react';
import styles from './Bars.module.scss';

const bars = (props) => {
    const DEFAULT_BACKGROUND_COLOR = "turquoise";
    const HIGHLIGHT_BACKGROUND_COLOR = "#DB504A";
    const total = props.limit;
    
    // create bar
    let bars = props.bars.map((value, index) => {
            return (
                <div className={styles.BarWrapper} key={index}>
                    <span>{value}%</span>
                    <div 
                        className={styles.Bar} 
                        style={{width: `${(value/100)*290}px`, backgroundColor: `${value > props.limit ? HIGHLIGHT_BACKGROUND_COLOR : DEFAULT_BACKGROUND_COLOR}`}}>
                    </div>
                </div>
            )
    })

    return(<div>{bars}</div>)
}

export default bars;