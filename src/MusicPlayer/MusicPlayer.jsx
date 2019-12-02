import React, { useState } from 'react';
import styles from './MusicPlayer.module.scss';
import { faPlay, faForward, faBackward, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MusicPlayer() {
    const [isPlaying, setPlayingState] = useState(false);
    const handlePlayBtnClick = () => {
        setPlayingState(!isPlaying);
    }
    return (
        <div>
            <h1 className="Title">Music Player</h1>
            <p>This simple music player allows user to play/pause, go to the next/previous song</p>
            <div className={styles.MusicPlayer}>
                <div className={styles.SongInfo}>
                    <p><b>Now Playing</b></p>
                    <p>Finding Hope by 3AM</p>
                    <audio controls>
                        <source src="horse.mp3" type="audio/mpeg"/>
                    </audio>
                </div>
                        <div className={styles.MusicPlayerControls}>

                            <span><FontAwesomeIcon icon={faBackward} /></span>
                            <div className={`${styles.PlayBtnWrapper} ${isPlaying ? styles.Playing : ''}`} onClick={handlePlayBtnClick}>
                                <div className={styles.RotateCircle}></div>
                                <span className={styles.PlayBtn}><FontAwesomeIcon icon={isPlaying ? faPause : faPlay} /></span>
                            </div>
                            <span><FontAwesomeIcon icon={faForward} /></span>
                        </div>
            </div>
                </div>
                )
            }
            
export default MusicPlayer;