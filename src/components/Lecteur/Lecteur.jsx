import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Lecteur.css";

const Lecteur = ({ playlist, current, setCurrent }) => {
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

    return (
        <AudioPlayer
            volume={0.5}
            onClickPrevious={prev}
            onClickNext={next}
            showSkipControls={true}
            src={playlist[current].url}
        />
    );
};

export default Lecteur;
