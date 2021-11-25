import './NavBar.css';
import profil from '../../assets/profil.png';
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

  return(
    <div className="header-container">
         <AiOutlineMenu />
      <h1 className="logo">BeatPerMove</h1>
      <img src={profil} alt="profil" className="profil"/>
  
    </div>
  )
}

export default Navbar;