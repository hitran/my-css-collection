import React, { useState, useEffect } from 'react';
import styles from './SortingVisualizer.module.scss';
import { getMergeSortAnimations } from './sortingAlgorithm/mergeSort';
import { getInsertionSortAnimations } from './sortingAlgorithm/insertionSort';
import { getBubbleSortAnimations } from './sortingAlgorithm/bubbleSort';

export default function AlgorithmVisualizer() {
    const [randomValues, setRandomValues] = useState([]);
    const [bars, setBars] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isArraySorted, setIsArraySorted] = useState(false);
    
    const barWrapper = React.createRef();

    const PRIMARY_COLOR = "turquoise";
    const SECONDARY_COLOR = "red";
    const ANIMATION_SPEED_MS = 2;

    // reset array
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

    // create animation
    const makeSortingAnimations = (animations) => {
        setIsButtonDisabled(true);
        setIsArraySorted(false);
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
                    if (animations[i].length === 2) {
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    } else if (animations[i].length === 4) {
                        const [barOneIdx, newBarOneHeight, barTwoIdx, newBarTwoHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        barOneStyle.height = `${newBarOneHeight}px`;
                        barTwoStyle.height = `${newBarTwoHeight}px`;
                    }

                }, i * ANIMATION_SPEED_MS);
            }
        }

        // calculate total time needed for the animation to finish
        const totalTime = animations.length * ANIMATION_SPEED_MS
        setTimeout(() => { setIsButtonDisabled(false) }, totalTime + 5);
        setTimeout(() => { setIsArraySorted(true) }, totalTime + 5);
    }

    const mergeSortAnimations = () => {
        const animations = getMergeSortAnimations(randomValues);
        makeSortingAnimations(animations);
    }

    const insertionSortAnimations = () => {
        const animations = getInsertionSortAnimations(randomValues);
        makeSortingAnimations(animations);
    }

    const bubbleSortAnimations = () => {
        const animations = getBubbleSortAnimations(randomValues);
        makeSortingAnimations(animations);
    }

    useEffect(() => {
        resetArray();
    }, [])

    return (
        <div className={styles.VisualizerWrapper}>
            <h1 className="Title">Sorting Visualizer</h1>
            <div className={styles.HiddenOnMobile}>
                <p className={styles.SuccessMsg}>{isArraySorted ? "This array is sorted!" : ""}</p>
                <p>{isButtonDisabled ? "Sorting..." : ""}</p>
                <p>{!isButtonDisabled && !isArraySorted ? "Click one of the sort buttons to start sorting this array" : ""}</p>
                <div>
                    <div ref={barWrapper} className={styles.BarWrapper}>{bars}</div>
                    <div className={styles.Settings}>
                        <button disabled={isButtonDisabled} onClick={resetArray}>Reset Array</button>
                        <button disabled={isButtonDisabled} onClick={mergeSortAnimations}>Merge Sort</button>
                        <button disabled={isButtonDisabled} onClick={insertionSortAnimations}>Insertion Sort</button>
                        <button disabled={isButtonDisabled} onClick={bubbleSortAnimations}>Bubble Sort</button>
                    </div>
                </div>
            </div>
            <div className={styles.HiddenOnDesktop}>Unfortunately, mobile devices are not supported by this project! :( </div>
        </div>
    )
}