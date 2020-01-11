import React from 'react';
import styles from './Loader.module.scss';

const loader = () => {
    return (
    <div className={styles.SpinnerWrapper}>
        <div className={styles.Spinner}>Loading...</div>
    </div>)
}

export default loader;