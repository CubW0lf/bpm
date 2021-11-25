import { useEffect, useState } from "react";
import songs from "../../songs";
import Lecteur from "../Lecteur/Lecteur";
import "./Bouton.css";

const Bouton = () => {
    const [mood, setMood] = useState("");
    const [animation, setAnimation] = useState(false);
    const [animationHeart, setAnimationHeart] = useState(false);
    const [bpm, setBpm] = useState(0);
    const [fork, setFork] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    // const musicFork = ["60-85", "85-110", "110-135", "135-160"];
    const handleBpm = () => {
        if (!animation) {
            setAnimationHeart(true);
        }
        setTimeout(() => {
            setBpm(Math.floor(Math.random() * (100 - 60) + 60));
            setAnimationHeart(false);
            setAnimation(!animation);
        }, 5000);
        setFork([]);
    };

    useEffect(() => {
        if (!animation) {
            setBpm(0);
            setMood("");
        } else {
            if (bpm <= 69) {
                setMood("Meditation");
                setFork([40, 85]);
            } else if (bpm >= 70 && bpm <= 79) {
                setMood("Chill");
                setFork([85, 110]);
            } else if (bpm >= 80 && bpm <= 89) {
                setMood("Casual");
                setFork([110, 135]);
            } else if (bpm >= 90) {
                setMood("Energy");
                setFork([135, 160]);
            }
        }
    }, [animation, bpm]);

    useEffect(() => {
        let list = [];
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].BPM >= fork[0] && songs[i].BPM <= fork[1]) {
                list.push(songs[i]);
            }
        }
        setPlaylist(list);
    }, [fork]);

    console.log(animation);

    return (
        <div className="Bouton">
            <span className="mood">{mood !== "" ? mood : ""}</span>
            <div className={`inner ${animation ? "pulse" : ""}`} onClick={handleBpm}>
                <svg width="253" height="126" viewBox="0 0 253 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 63H50.7847L66.4818 1L82.1788 125L96.0292 33L108.033 94L120.036 63H137.58L151.431 33L167.128 94L176.361 63H253"
                        strokeWidth="5"
                        className={`waveform ${animationHeart ? "heart" : ""}`}
                        pathLength="1"
                    />
                </svg>
            </div>
            <div className="playlist">
                {playlist.length !== 0 ? (
                    <div className="song">
                        <span>{playlist[0].Auteur}</span> -<span>{playlist[0].Titre}</span>
                        <Lecteur playlist={playlist} />
                        {/* <audio controls src={playlist[0].url}>
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio> */}
                    </div>
                ) : (
                    "Ya pas de morceaux"
                )}
            </div>
        </div>
    );
};

export default Bouton;
