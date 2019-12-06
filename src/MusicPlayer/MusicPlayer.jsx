import React, { useState } from 'react';
import styles from './MusicPlayer.module.scss';
import { faPlay, faForward, faBackward, faPause, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import findingHopeAudio from './assets/finding_hope_3AM.mp3';
import findingHopeImage from './assets/finding_hope.jpg';


function MusicPlayer() {
    const [isPlaying, setPlayingState] = useState(false);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [isMuted, setMutedState] = useState(false);
    let musicAudio = React.createRef();
    let currentProgress = React.createRef();

    const handlePlayBtnClick = () => {
        setPlayingState(!isPlaying);
        isPlaying ? musicAudio.current.pause() : musicAudio.current.play();
    }

    const updateTime = (time = musicAudio.current.currentTime) => {
        time = Math.floor(musicAudio.current.currentTime);
        setCurrentTime(formatTime(time));
        // update progress bar
        const current = musicAudio.current.currentTime;
        const total = musicAudio.current.duration;
        currentProgress.current.style.width = `${(current / total) * 170}px`;
        if (current === total) {
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

    const changeVolume = () => {
        setMutedState(!isMuted);
        musicAudio.current.muted = !isMuted;
    }

    return (
        <div className={styles.MusicPlayer}>
            <h1 className="Title">Music Player</h1>
            <p>A simple music player</p>
            <audio ref={musicAudio} onTimeUpdate={updateTime}>
                <source src={findingHopeAudio} type="audio/mpeg" />
            </audio>
            <div className={styles.SongInfo}>
                <p><b>Finding Hope</b></p>
                <p>3AM</p>
                <div className={styles.SongDuration}>
                    <p>{currentTime}</p>
                    <p>3:22</p>
                </div>
                <div className={styles.ProgressBar}>
                    <div ref={currentProgress} className={styles.CurrentProgress}></div>
                </div>
            </div>
            <div className={styles.MusicPlayerControls}>
                <div className={styles.RotateCircle}>
                    <img src={findingHopeImage} alt="poster" />
                    <span></span>
                </div>
                <span>
                    <FontAwesomeIcon icon={faBackward}/>
                </span>
                <span className={styles.PlayBtn}>
                    <FontAwesomeIcon onClick={handlePlayBtnClick} icon={isPlaying ? faPause : faPlay} />
                </span>
                <span>
                    <FontAwesomeIcon icon={faForward} />
                </span>
                <span>
                    <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} onClick={changeVolume} />
                </span>
            </div>
        </div>
    )
}

export default MusicPlayer;