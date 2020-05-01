import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.scss';

function Nav() {
    const [isNavBarOpened, setNavBarState] = useState(false);
    const toggleNavBar = e => {
        setNavBarState(!isNavBarOpened);
    }

    const active = {
        color: '#DB504A'
    };

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
                <li><NavLink to="/" activeStyle={active} exact>Music Player</NavLink></li>
                <li><NavLink to="/pinterest-grid" activeStyle={active} exact>Pinterest Grid</NavLink></li>
                <li><NavLink to="/sorting-visualizer" activeStyle={active} exact>Sorting Visualizer</NavLink></li>
                <li><NavLink to="/progress-bars" activeStyle={active} exact>Progress Bars</NavLink></li>
                <li><NavLink to="/calendar">Calendar</NavLink></li>
            </ul>
        </nav>
        </div>
        
    )
}

export default Nav;