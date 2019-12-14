import React, { useState, useEffect } from 'react';
import styles from './AlgorithmVisualizer.module.scss';
import { getMergeSortAnimations } from './mergeSort/mergeSort';

export default function AlgorithmVisualizer() {
    const [randomValues, setRandomValues] = useState([]);
    const [bars, setBars] = useState([]);
    const barWrapper = React.createRef();
    
    
    const PRIMARY_COLOR = "turquoise";
    const SECONDARY_COLOR = "red";
    const ANIMATION_SPEED_MS = 20;


    const resetArray = () => {
        let tempValues = [];
        for (let i = 0; i < 80; i++) {
            tempValues.push(Math.floor(Math.random() * 500));
        }
        setRandomValues(tempValues);
        const newBars = tempValues.map(value => <div className={styles.Bar} style={{ height: `${value}px`, backgroundColor: `${PRIMARY_COLOR}` }}></div>);
        setBars(newBars);
    }

    const mergeSortAnimations = () => {
        if (randomValues.length <= 1) return;
        const animations = getMergeSortAnimations(randomValues);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = barWrapper.current.childNodes;
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    const selectionSortAnimations = () => {}
    const insertionSortAnimations = () => {}
    const bubbleSortAnimations = () => {}

    useEffect(() => { resetArray()}, [])

    

    return (
        <div className={styles.VisualizerWrapper}>
            <div ref={barWrapper} className={styles.BarWrapper}>{bars}</div>
            <div className={styles.Settings}>
                <button onClick={resetArray}>Reset Array</button>
                <button onClick={mergeSortAnimations}>Merge Sort</button>
                {/* <button onClick={selectionSortAnimations}>Selection Sort</button>
                <button onClick={insertionSortAnimations}>Insertion Sort</button>
                <button onClick={bubbleSortAnimations}>Bubble Sort</button> */}
            </div>
        </div>
    )
}