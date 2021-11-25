import ReactAudioPlayer from "react-audio-player";
import "./Lecteur.css";

const Lecteur = () => {
    return (
        <div>
            <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
        </div>
    );
};

export default Lecteur;
