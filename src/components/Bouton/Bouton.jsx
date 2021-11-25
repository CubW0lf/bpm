import { useEffect, useState } from "react";
import songs from "../../songs";
import "./Bouton.css";

const Bouton = () => {
    const [mood, setMood] = useState("");
    const [animation, setAnimation] = useState(false);
    const [bpm, setBpm] = useState(0);
    const [fork, setFork] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    // const musicFork = ["60-85", "85-110", "110-135", "135-160"];
    const handleBpm = () => {
        setAnimation(!animation);
        setBpm(Math.floor(Math.random() * (100 - 60) + 60));
        setFork([]);
    };

    useEffect(() => {
        if (!animation) {
            setBpm(0);
            setMood("");
        } else {
            if (bpm >= 60 && bpm <= 69) {
                setMood("Meditation");
                setFork([60, 85]);
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

    console.log(playlist);
    return (
        <div className="Bouton" onClick={handleBpm}>
            <span className="mood">
                {mood !== "" ? mood : <span className="minify">Veuillez Placer votre Index sous le Flash</span>}
            </span>
            <div className={`inner ${animation ? "animation" : ""}`}></div>
            <div className="playlist">
                {playlist.length !== 0 ? (
                    <div className="song">
                        <span>{playlist[0].Auteur}</span> -<span>{playlist[0].Titre}</span>
                        <audio controls src={playlist[0].url}>
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </div>
                ) : (
                    "Ya pas de morceaux"
                )}
            </div>
        </div>
    );
};

export default Bouton;
