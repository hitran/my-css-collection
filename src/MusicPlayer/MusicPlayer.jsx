import React, { useState, useEffect } from 'react';
import styles from './MusicPlayer.module.scss';
import { faPlay, faForward, faBackward, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import findingHope from './assets/finding_hope_3AM.mp3';

function MusicPlayer() {
    const [isPlaying, setPlayingState] = useState(false);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    let musicAudio = React.createRef();
    let currentProgress = React.createRef();

    const handlePlayBtnClick = () => {
        setPlayingState(!isPlaying);
        isPlaying ? musicAudio.current.pause() : musicAudio.current.play();
    }
    const updateTime = () => {
        const time = Math.floor(musicAudio.current.currentTime);
        setCurrentTime(formatTime(time));
        // update progress bar
        const current = musicAudio.current.currentTime;
        const total = musicAudio.current.duration;
        currentProgress.current.style.width = `${(current / total) * 170}px`;
        if(current === total) {
            setPlayingState(false);
        }
    }

    const formatTime = (time) => {
        const minute = `${Math.floor(time / 60)}`;
        time = time % 60;
        let second;
        if (time < 10) {
            second = `0${time}`
        } else {
            second = `${time}`;
        }
        return (`${minute}:${second}`)
    }

    useEffect(() => {
        if (musicAudio.current && musicAudio.current.duration) {
            let musicDuration = Math.floor(musicAudio.current.duration);
            setDuration(formatTime(musicDuration));
        }
    }, [musicAudio]);

    return (
        <div className={styles.MusicPlayer}>
            <h1 className="Title">Music Player</h1>
            <p>This simple music player allows user to play/pause, go to the next/previous song</p>
            <audio ref={musicAudio} onTimeUpdate={updateTime}>
                <source src={findingHope} type="audio/mpeg" />
            </audio>
            <div className={styles.SongInfo}>
                <p><b>Finding Hope</b></p>
                <p>3 AM</p>
                <div className={styles.SongDuration}>
                    <p>{currentTime}</p>
                    <p>{duration}</p>
                </div>
                <div className={styles.ProgressBar}>
                    <div ref={currentProgress} className={styles.CurrentProgress}></div>
                </div>
            </div>
            <div className={styles.MusicPlayerControls}>
                <div className={styles.RotateCircle}>
                    <span></span>
                </div>
                <span><FontAwesomeIcon icon={faBackward} /></span>
                <span className={styles.PlayBtn}><FontAwesomeIcon onClick={handlePlayBtnClick} icon={isPlaying ? faPause : faPlay} /></span>
                <span><FontAwesomeIcon icon={faForward} /></span>
            </div>
        </div>
    )
}

export default MusicPlayer;