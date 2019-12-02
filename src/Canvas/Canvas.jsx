import React from 'react';
import styles from './Canvas.module.scss';

function Canvas(props) {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.MainContentWrapper}>
                {props.children}
            </div>
        </div>
    )
}


export default Canvas;