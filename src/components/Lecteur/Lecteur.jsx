import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Lecteur.css";

const Lecteur = () => {
  return (
    <div>
      <AudioPlayer
        autoPlay
        src="https://aveclagare.org/mp3/120717RisingAppalachia-Wider%20Circles.mp3"
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );

export default Lecteur;
