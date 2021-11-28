import { useEffect, useState } from "react";
import songs from "../../songs";
import Lecteur from "../Lecteur/Lecteur";
import "./Main.css";
import SubMenu from "../SubMenu/SubMenu";
import Watch from "../Watch/Watch";
import Playlist from "../Playlist/Playlist";
import Bouton from "../Bouton/Bouton";

const Main = () => {
    const [mood, setMood] = useState("");
    const [animation, setAnimation] = useState(false);
    const [animationHeart, setAnimationHeart] = useState(false);
    const [watch, setWatch] = useState(false);
    const [bpm, setBpm] = useState(0);
    const [fork, setFork] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState("mini");
    const [play, setPlay] = useState(false);

    // const musicFork = ["60-85", "85-110", "110-135", "135-160"];

    // Gère la définition du BPM et les animations en conséquences
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
        const canVibrate = window.navigator.vibrate;
        if (canVibrate) window.navigator.vibrate(100);

        setFork([]);
    };

    // reset ou définit les states BPM et Mood selon que l'utilisateur met fin ou démarre une session
    useEffect(() => {
        if (!animation) {
            setBpm(0);
            setMood("");
            setCurrent(0);
            setPlay(false);
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

    // Une fois qu'une fourchette est définit rempli la playlist de tous les morceaux qui correspondent au caractéristique du Mood
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
            <SubMenu active={active} setActive={setActive} />
            <main>
                <Watch watch={watch} handleWatch={handleWatch} active={active} />
                {active === "mini" ? (
                    <Bouton
                        mood={mood}
                        animationHeart={animationHeart}
                        handleBpm={handleBpm}
                        animation={animation}
                        active={active}
                        play={play}
                    />
                ) : (
                    <Playlist playlist={playlist} current={current} setCurrent={setCurrent} />
                )}
                <Lecteur
                    autoplay
                    playlist={playlist}
                    current={current}
                    setCurrent={setCurrent}
                    setPlay={setPlay}
                    mood={mood}
                />
            </main>
        </>
    );
};

export default Main;
