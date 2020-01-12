import React from 'react';
import styles from './Bars.module.scss';

const bars = (props) => {
    const DEFAULT_BACKGROUND_COLOR = "turquoise";
    const HIGHLIGHT_BACKGROUND_COLOR = "#DB504A";
    
    // calculate bar value
    const getBarValue = (value, limit) => {
        return Math.floor((value/limit)*100);
    }

    // calculate length of consumed amount
    const getBarLength = (value, limit, divLength) => {
        return (value/limit)*divLength;
    }

    // create bar
    let bars = props.bars.map((value, index) => {
            return (
                <div className={styles.BarWrapper} key={index}>
                    <span>{getBarValue(value, props.limit)}%</span>
                    <div 
                        className={styles.Bar} 
                        style={{width: `${getBarLength(value, props.limit, 290)}px`, backgroundColor: `${value > props.limit ? HIGHLIGHT_BACKGROUND_COLOR : DEFAULT_BACKGROUND_COLOR}`}}>
                    </div>
                </div>
            )
    })

    return(<div>{bars}</div>)
}

export default bars;