import "./genreBouton.css";
import Pop from "../../assets/audio/pop.mp3";
import Rock from "../../assets/audio/rock.mp3";
import Rap from "../../assets/audio/rap.mp3";
import Rnb from "../../assets/audio/rnb.mp3";
import Dance from "../../assets/audio/dance.mp3";
import Variete from "../../assets/audio/variete.mp3";
import Ambient from "../../assets/audio/ambient.mp3";
import Funk from "../../assets/audio/funk.mp3";
import Classique from "../../assets/audio/classique.mp3";

const GenreBouton = () => {
    const playSongPop = () => {
        const song = new Audio();
        song.src = Pop;
        song.play();
    };

    const playSongRock = () => {
        const song = new Audio();
        song.src = Rock;
        song.play();
    };

    const playSongRap = () => {
        const song = new Audio();
        song.src = Rap;
        song.play();
    };

    const playSongRnb = () => {
        const song = new Audio();
        song.src = Rnb;
        song.play();
    };

    const playSongDance = () => {
        const song = new Audio();
        song.src = Dance;
        song.play();
    };

    const playSongVariete = () => {
        const song = new Audio();
        song.src = Variete;
        song.play();
    };

    const playSongAmbient = () => {
        const song = new Audio();
        song.src = Ambient;
        song.play();
    };

    const playSongFunk = () => {
        const song = new Audio();
        song.src = Funk;
        song.play();
    };

    const playSongClassique = () => {
        const song = new Audio();
        song.src = Classique;
        song.play();
    };

    return (
        <div className="allcontainerbouton">
            <div className="containerGenreBouton">
                <button className="genreBouton" onClick={playSongPop}>
                    Pop
                </button>
                <button className="butonGenreRock" onClick={playSongRock}>
                    Rock
                </button>
            </div>

            <div className="containerGenreBouton">
                <button className="butonGenreRap" onClick={playSongRap}>
                    Rap
                </button>
                <button className="butonGenreRnb" onClick={playSongRnb}>
                    Rnb
                </button>
            </div>

            <div className="containerGenreBouton">
                <button className="butonGenreDance" onClick={playSongDance}>
                    Dance
                </button>
                <button className="butonGenreVariete" onClick={playSongVariete}>
                    Variete
                </button>
            </div>

            <div className="containerGenreBouton">
                <button className="butonGenreAmbient" onClick={playSongAmbient}>
                    Ambient
                </button>
                <button className="butonGenreFunk" onClick={playSongFunk}>
                    Funk
                </button>
            </div>

            <div className="containerGenreBoutonclassique">
                <button className="butonGenreClassique" onClick={playSongClassique}>
                    Classique
                </button>
            </div>
        </div>
    );
};

export default GenreBouton;
