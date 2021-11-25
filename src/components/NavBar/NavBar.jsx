import './NavBar.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import {Link} from "react-router-dom";


const Navbar = () => {

  return(
    <div className="header-container">
         <AiOutlineMenu className="burger"/>
         <Link to={'/'}>
      <h1 className="logo">Beat Per Move</h1>
      </Link>
      <Link to={'/user'}>
      <FaUserAlt className="logouser"/>
      </Link>
    </div>
  )
}

export default Navbar;