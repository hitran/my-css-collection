import React from 'react';
import styles from './Controls.module.scss';

const controls = (props) => {

    // create dropdown options
    let options = []
    for (let i = 0; i < props.total; i ++) {
        options.push(<option key={i+1} value={i}># Progress {i + 1}</option>)
    }

    // update bar whenever user select another option
    const onDropdownBarSelect = (e) => {
        props.onSelectBar(e.target.value)
    }

    // handle control button click
    const onControlButtonClick = (value) => {
        props.onControlButtonClick(value)
    }

    // create control buttons
    let buttons = props.buttons.map((value, index) => <button key={index} onClick={() => {onControlButtonClick(value)}}>{value}</button>);
    
    return(
        <div className={styles.ControlsWrapper}>
            <select onChange={onDropdownBarSelect}>
                {options}
            </select>
            <div className={styles.ButtonWrapper}>
                {buttons}
            </div>
        </div>
    )
}

export default controls;