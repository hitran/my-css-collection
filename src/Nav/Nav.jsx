import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Nav.module.scss';

function Nav() {
    const [isNavBarOpened, setNavBarState] = useState(false);
    const toggleNavBar = e => {
        setNavBarState(!isNavBarOpened);
    }

    return(
        <div>
            <button onClick={toggleNavBar} className={styles.BurgerButton}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`${styles.NavBar} ${isNavBarOpened ? styles.open : ''}`}>
            <button onClick={toggleNavBar} className={styles.CloseButton}>
                <span></span>
                <span></span>
            </button>
            <ul onClick={toggleNavBar}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resposive-grid">Responsive Grid</Link></li>
                <li><Link to="/music-player">Music Player</Link></li>
            </ul>
        </nav>
        </div>
        
    )
}

export default Nav;