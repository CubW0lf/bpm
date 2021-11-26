import "./genreBouton.css";
import Rock from "../../assets/rock.mp3"
import { useState } from "react";
const GenreBouton = () => {
const [audio, setAudio] = useState(false);
  
  const playSongPop = () => {
    const song = new Audio();
    song.src = Rock;
    song.play();
  }

  const playSongRock = () => {
    const song = new Audio();
    song.src = Rock;
    song.play();
  }

  const playSongRap = () => {
    const song = new Audio();
    song.src = Rock;
    song.play();
  }

  const playSongRNB = () => {
    const song = new Audio();
    song.src = Rock;
    song.play();
  }

  const playSongDance = () => {
    const song = new Audio();
    song.src = Rock;
    song.play();
  }

  const playSongVariete = () => {
    const song = new Audio();
    song.src = Rock;
    song.play();
  }

  const playSongAmbient = () => {
    const song = new Audio();
    song.src = Rock;
    song.play();
  }

  const playSongFunk = () => {
    const song = new Audio();
    song.src = Rock;
    song.play();
  }

  const playSongClassique = () => {
    const song = new Audio();
    song.src = Rock;
    song.play();
  }

  return(
  <div className='allcontainerbouton'>
    <div className='containerGenreBouton'>
     <button className='genreBouton' onClick={playSongPop}>POP</button>
     <button  className='butonGenreRock' onClick={playSongRock}>Rock{audio}</button>
    </div>

    <div className='containerGenreBouton'>
     <button  className='butonGenreRap' onClick={playSongRap}>Rap</button>
     <button  className='butonGenreRnb' onClick={playSongRNB}>Rnb</button>
    </div>

    <div className='containerGenreBouton'>
     <button  className='butonGenreDance' onClick={playSongDance}>Dance</button>
     <button  className='butonGenreVariete' onClick={playSongVariete}>Variete</button>
    </div>

    <div className='containerGenreBouton'>
     <button  className='butonGenreAmbient' onClick={playSongAmbient}>Ambient</button>
     <button  className='butonGenreFunk' onClick={playSongFunk}>Funk</button>
    </div>
 
    <div className='containerGenreBoutonclassique'>
     <button  className='butonGenreClassique' onClick={playSongClassique}>Classique</button> 
    </div>
  </div>    
    )
}



export default GenreBouton;