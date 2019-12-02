import React from 'react';
import styles from './Grid.module.scss';


function Grid() {
    return (
        <div className={styles.ResponsiveGrid}>
            <h1 className="Title">Responsive Grid</h1>
            <p>Resize screen to see responsive grid</p>
            <div className={styles.GridWrapper}>
                <div className={styles.Box}>Header</div>
                <div className={styles.Box}>Main</div>
                <div className={styles.Box}>Side Bar 1</div>
                <div className={styles.Box}>Side Bar 2</div>
                <div className={styles.Box}>Side Bar 3</div>
                <div className={styles.Box}>Footer</div>
            </div>
        </div>
    )
}

export default Grid;