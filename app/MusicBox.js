'use client'
import { useState } from "react"
import styles from "./styles.css"
export default function MusicBox(props){ //MusicBox component
    const [IsHovered, setIsHovered] = useState(false);
    return (
        <div className="music-grid">
            <div className="image-box">
            <img src={props.source} alt="song" className="music-image" onClick={
                () => {
                    window.open(props.link, '_blank')
                }
            } onMouseEnter={
                () => {
                    setIsHovered(true);
                }
            } onMouseLeave={
                () => {
                    setIsHovered(false);
                }
            }/>
            {
                IsHovered ? <img src="play-button.png" className="play-button"/> : <></>
            }
        </div>
            <div className="music-info-box">
                <h1 className="song-name">{props.name}</h1>
                <p className="music-supp-text">on</p>
                <h1 className="album">{props.album}</h1>
                <p className="music-supp-text">by</p>
                <p className="artist-name">{props.artist}</p>
                <p className="lyric">{props.lyric}</p>
            </div>
        </div>
    );
}