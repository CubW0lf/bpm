import "./genreBouton.css";
import Rock from "../../assets/rock.mp3"
const GenreBouton = () => {
// const [audio, setAudio] = useState(false);
  
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
    <div className='containerGenreBouton'>
     <button className='genreBouton' onClick={playSongPop}>POP</button>
     {/* <button  className='butonGenreRock' onClick={}>Rock{audio}</button>
     <button  className='butonGenreRap' onClick={}>Rap</button>
     <button  className='butonGenreRnb' onClick={}>Rnb</button>
     <button  className='butonGenreDance' onClick={}>Dance</button>
     <button  className='butonGenreVariete' onClick={}>Variete</button>
     <button  className='butonGenreAmbient' onClick={}>Ambient</button>
     <button  className='butonGenreFunk' onClick={}>Funk</button>
     <button  className='butonGenreClassique' onClick={}>Classique</button> */}
     </div>
    )
}



export default GenreBouton;