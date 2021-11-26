import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Lecteur.css";

const Lecteur = ({ playlist }) => {
    return <AudioPlayer src={playlist[0].url} onPlay={(e) => console.log("onPlay")} />;
};

export default Lecteur;
