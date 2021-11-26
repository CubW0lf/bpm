import "./genreBouton.css";
import Pop from "../../assets/pop.mp3"
import Rock from "../../assets/rock.mp3"
import Rap from "../../assets/rap.mp3"
import Rnb from "../../assets/rnb.mp3"
import Dance from "../../assets/dance.mp3"
import Variete from "../../assets/variete.mp3"
import Ambient from "../../assets/ambient.mp3"
import Funk from "../../assets/funk.mp3"
import Classique from "../../assets/classique.mp3"

const GenreBouton = () => {
  
  const playSongPop = () => {
    const song = new Audio();
    song.src = Pop;
    song.play();
  }

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

  return(
  <div className='containerButton'> 
     <button className='pulseBouton' onClick={playSongPop}>POP</button>
     <button  className='pulseBouton' onClick={playSongRock}>ROCK</button>
     <button  className='pulseBouton' onClick={playSongRap}>RAP</button>
     <button  className='pulseBouton' onClick={playSongRnb}>RNB</button>
     <button  className='pulseBouton' onClick={playSongDance}>DANCE</button>
     <button  className='pulseBouton' onClick={playSongVariete}>VARIÉTÉ</button>
     <button  className='pulseBouton' onClick={playSongAmbient}>AMBIANT</button>
     <button  className='pulseBouton' onClick={playSongFunk}>FUNK</button>
    <button  className='pulseBouton' onClick={playSongClassique}>CLASSIQUE</button> 
    </div> 
    )
};

export default GenreBouton;
