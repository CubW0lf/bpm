import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Lecteur.css";

const Lecteur = ({ playlist, current, setCurrent, setPlay, mood }) => {
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
            {playlist.length !== 0 ? (
                <div
                    className={`song ${mood === "Chill" ? "chill" : ""} ${mood === "Casual" ? "casual" : ""} ${
                        mood === "Meditation" ? "meditation" : ""
                    } ${mood === "Energy" ? "energy" : ""}`}
                >
                    <div className="song-meta">
                        <span className="title">{playlist[current]?.Auteur}</span>
                        <span className="author"> {playlist[current]?.Titre}</span>
                    </div>
                    <AudioPlayer
                        volume={0.5}
                        onClickPrevious={prev}
                        onClickNext={next}
                        showSkipControls={true}
                        src={playlist[current].url}
                        autoPlay={true}
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
