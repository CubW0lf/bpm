import Eq from "../Eq/Eq";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Lecteur.css";

const Lecteur = ({ playlist, current, setCurrent, active, play, setPlay }) => {
    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const next = () => {
        if (current < playlist.length - 1) {
            setCurrent(current + 1);
        }
    };

    const playing = () => {
        setPlay(true);
    };

    const notPlaying = () => {
        setPlay(false);
    };

    return (
        <div className="Lecteur">
            <Eq play={play} active={active} />
            {playlist.length !== 0 ? (
                <div className="song">
                    <div className="song-meta">
                        <span>{playlist[current]?.Auteur}</span> <span>{playlist[current]?.Titre}</span>
                    </div>
                    <AudioPlayer
                        volume={0.5}
                        onClickPrevious={prev}
                        onClickNext={next}
                        showSkipControls={true}
                        src={playlist[current].url}
                        autoPlay
                        onEnded={next}
                        onListen={playing}
                        onPause={notPlaying}
                    />
                </div>
            ) : (
                <p className="white">
                    Appuyer sur Activer
                    <br />
                    pour lancer la lecture en fonction de votre "mood"
                </p>
            )}
        </div>
    );
};

export default Lecteur;
