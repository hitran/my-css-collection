import React from 'react';
import styles from './Canvas.module.scss';

function Canvas(props) {
    return (
        <div className={styles.Wrapper} >
            {props.children}
        </div>
    )
}


export default Canvas;