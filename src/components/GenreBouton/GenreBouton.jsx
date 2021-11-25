import "./genreBouton.css";
import Pop from "../../assets/pop.mp3"
import Rock from "../../assets/rock.mp3"
import Rap from "../../assets/rap.mp3"
import Rnb from "../../assets/rnb.mp3"
import Variete from "../../assets/variete.mp3"
import Ambient from "../../assets/ambient.mp3"
import Funk from "../../assets/funk.mp3"
import Classique from "../../assets/classique.mp3"

const GenreBouton = () => {
// const [audio, setAudio] = useState(false);
  
  const playSongPop = () => {
    const song = new Audio();
    song.src = Pop;
    song.play();
  }

  const playSongRock = () => {
    const song = new Audio();
    song.src = Rock;
    song.play();
  }

  const playSongRap = () => {
    const song = new Audio();
    song.src = Rap;
    song.play();
  }

  const playSongRNB = () => {
    const song = new Audio();
    song.src = Rnb;
    song.play();
  }

  const playSongDance = () => {
    const song = new Audio();
    song.src = Dance;
    song.play();
  }

  const playSongVariete = () => {
    const song = new Audio();
    song.src = Variete;
    song.play();
  }

  const playSongAmbient = () => {
    const song = new Audio();
    song.src = Ambient;
    song.play();
  }

  const playSongFunk = () => {
    const song = new Audio();
    song.src = Funk;
    song.play();
  }

  const playSongClassique = () => {
    const song = new Audio();
    song.src = Classique;
    song.play();
  }

  return(
    <div className='containerGenreBouton'>
     <button className='genreBouton' onClick={playSongPop}>POP</button>
     <button  className='butonGenreRock' onClick={playSongRock}>Rock{audio}</button>
     <button  className='butonGenreRap' onClick={playSongRap}>Rap</button>
     <button  className='butonGenreRnb' onClick={playSongRNB}>Rnb</button>
     <button  className='butonGenreDance' onClick={playSongDance}>Dance</button>
     <button  className='butonGenreVariete' onClick={playSongVariete}>Variete</button>
     <button  className='butonGenreAmbient' onClick={playSongAmbient}>Ambient</button>
     <button  className='butonGenreFunk' onClick={playSongFunk}>Funk</button>
     <button  className='butonGenreClassique' onClick={playSongClassique}>Classique</button>
     </div>
    )
}



export default GenreBouton;