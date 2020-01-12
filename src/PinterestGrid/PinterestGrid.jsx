import React from 'react';
import styles from './PinterestGrid.module.scss';
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Grid() {
    const boxes = [];
    for (let i = 0; i < 16; i++) {
        boxes.push(<div key={i+1} className={styles.Box}></div>)
    }
    return (
        <div className="MainContentWrapper">
            <div className={styles.GridWrapper}>
                <div>
                    <FontAwesomeIcon icon={faSmile} />
                    <h1 className="Title">Pinterest Grid</h1>
                </div>

                <hr />
                <div className={styles.Grid}>
                    {boxes}
                </div>
            </div>
        </div>
    )
}

export default Grid;