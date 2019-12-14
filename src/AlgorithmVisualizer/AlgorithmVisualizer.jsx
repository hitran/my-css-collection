import React, { useState, useEffect } from 'react';
import styles from './AlgorithmVisualizer.module.scss';
import { getMergeSortAnimations } from './mergeSort/mergeSort';

export default function AlgorithmVisualizer() {
    const [randomValues, setRandomValues] = useState([]);
    const [bars, setBars] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isArraySorted, setIsArraySorted] = useState(false);

    const barWrapper = React.createRef();

    const PRIMARY_COLOR = "turquoise";
    const SECONDARY_COLOR = "red";
    const ANIMATION_SPEED_MS = 10;


    const resetArray = () => {
        let tempValues = [];
        for (let i = 0; i < 150; i++) {
            tempValues.push(Math.floor(Math.random() * 500));
        }
        setRandomValues(tempValues);
        const newBars = tempValues.map(value => <div className={styles.Bar} style={{ height: `${value}px`, backgroundColor: `${PRIMARY_COLOR}` }}></div>);
        setBars(newBars);
        setIsButtonDisabled(false);
        setIsArraySorted(false);
    }

    const mergeSortAnimations = () => {
        
        setIsButtonDisabled(true);
        setIsArraySorted(false);

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

        // calculate total time needed for the animation to finish
        const totalTime = animations.length * ANIMATION_SPEED_MS
        setTimeout(() => { setIsButtonDisabled(false) }, totalTime + 5);
        setTimeout(() => { setIsArraySorted(true) }, totalTime + 5);
    }

    // const selectionSortAnimations = () => { }
    // const insertionSortAnimations = () => { }
    // const bubbleSortAnimations = () => { }

    useEffect(() => {
        resetArray();
    }, [])



    return (
        <div className={styles.VisualizerWrapper}>
            <h1 className="Title">Sorting Visualizer</h1>
            <div className={styles.HiddenOnMobile}>
                <p className={styles.SuccessMsg}>{isArraySorted ? "This array is sorted!" :"" }</p>
                <p className={styles.SuccessMsg}>{isButtonDisabled ? "Sorting..." : ""}</p>
                <p className={styles.SuccessMsg}>{!isButtonDisabled && !isArraySorted ? "Click merge sort button to start sorting this array" : ""}</p>
                <div>
                    <div ref={barWrapper} className={styles.BarWrapper}>{bars}</div>
                    <div className={styles.Settings}>
                        <button disabled={isButtonDisabled} onClick={resetArray}>Reset Array</button>
                        <button disabled={isButtonDisabled} onClick={mergeSortAnimations}>Merge Sort</button>
                        {/* <button onClick={selectionSortAnimations}>Selection Sort</button>
                        <button onClick={insertionSortAnimations}>Insertion Sort</button>
                        <button onClick={bubbleSortAnimations}>Bubble Sort</button> */}
                    </div>
                </div>
            </div>
            <div className={styles.HiddenOnDesktop}>Unfortunately, devices are not supported by this project! :( </div>
        </div>
    )
}