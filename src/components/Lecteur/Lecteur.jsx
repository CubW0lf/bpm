import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Lecteur.css";

const Lecteur = ({ playlist }) => {
    return (
        <div>
            <AudioPlayer autoPlay src={playlist[0].url} onPlay={(e) => console.log("onPlay")} />
        </div>
    );
};

export default Lecteur;
