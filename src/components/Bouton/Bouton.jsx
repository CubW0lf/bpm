import { useEffect, useState } from "react";
import songs from "../../songs";
import Lecteur from "../Lecteur/Lecteur";
import watchSvg from "../../assets/images/watch.png";
import "./Bouton.css";

const Bouton = () => {
    const [mood, setMood] = useState("");
    const [animation, setAnimation] = useState(false);
    const [animationHeart, setAnimationHeart] = useState(false);
    const [watch, setWatch] = useState(false);
    const [bpm, setBpm] = useState(0);
    const [fork, setFork] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState("mini");

    // const musicFork = ["60-85", "85-110", "110-135", "135-160"];
    const handleBpm = () => {
        if (!animationHeart && !animation) {
            setAnimationHeart(true);
            setAnimation(false);
            setTimeout(() => {
                setAnimationHeart(false);
                setAnimation(true);
                setBpm(Math.floor(Math.random() * (100 - 60) + 60));
            }, 5000);
        } else if (!animationHeart && animation) {
            setAnimationHeart(false);
            setAnimation(false);
        }
        setFork([]);
    };

    useEffect(() => {
        if (!animation) {
            setBpm(0);
            setMood("");
        } else {
            if (bpm <= 70) {
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
                setFork([135, 180]);
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
        function shuffle(array) {
            var currentIndex = array.length,
                temporaryValue,
                randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
        shuffle(list);
        setPlaylist(list);
    }, [fork]);

    useEffect(() => {
        let list = [];
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].BPM >= fork[0] && songs[i].BPM <= fork[1]) {
                list.push(songs[i]);
            }
        }
        setPlaylist(list);
    }, [fork, current]);

    const handleWatch = () => {
        setWatch(!watch);
    };

    return (
        <>
            <div className="minifull">
                <div className="mini" onClick={() => setActive("mini")}>
                    <span>MINI</span>
                    <div className={`border ${active === "mini" ? "active" : ""}`}></div>
                </div>
                <div className="full" onClick={() => setActive("full")}>
                    <span>FULL</span>
                    <div className={`border ${active === "full" ? "active" : ""}`}></div>
                </div>
            </div>
            <p className="connexiontexte" onClick={handleWatch}>
                {watch ? (
                    <img src={watchSvg} alt="Montre Connectée" style={{ fill: "pink" }} className="watch" />
                ) : (
                    "Veuillez connecter votre SmartWatch."
                )}
            </p>
            {active === "mini" ? (
                <>
                    <div className="Bouton">
                        <span className="mood">{mood !== "" ? mood : animationHeart ? "" : "Activer"}</span>
                        <div className={`inner ${animation ? "pulse" : ""}`} onClick={handleBpm}>
                            <svg
                                width="253"
                                height="126"
                                viewBox="0 0 253 126"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 63H50.7847L66.4818 1L82.1788 125L96.0292 33L108.033 94L120.036 63H137.58L151.431 33L167.128 94L176.361 63H253"
                                    strokeWidth="5"
                                    className={`waveform ${animationHeart ? "heart" : ""}`}
                                    pathLength="1"
                                />
                            </svg>
                        </div>
                    </div>
                </>
            ) : (
                <div className="Bouton">
                    {playlist.length !== 0 ? (
                        playlist.map((s, index) => (
                            <div className="playlist-full" key={index}>
                                <div className="song-full">
                                    <span className="titre">{s.Titre}</span>
                                    <span className="artiste">{s.Auteur}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="sorry">Pas de playlist chargée</p>
                    )}
                </div>
            )}
            <div className="playlist">
                {playlist.length !== 0 ? (
                    <div className="song">
                        <div className="song-meta">
                            <span>{playlist[current]?.Auteur}</span> <span>{playlist[current]?.Titre}</span>
                        </div>
                        <Lecteur autoplay playlist={playlist} current={current} setCurrent={setCurrent} />
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default Bouton;
