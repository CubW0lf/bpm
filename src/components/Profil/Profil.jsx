import "./Profil.css";
import nicolas from "../../assets/nicolas.png";
import {RiHeartsFill} from 'react-icons/ri';

const Profil = () => {
  return (
    <div className="profildiv">
      <div className="profildiv1">
        <img src={nicolas} alt="user" className="profilUser" />
        <h2 className="profilh2">NICOLAS LELIEVRE</h2>
        <h4 className="profilh4">MOOD PRÉFÉRÉ : CHILL</h4>
      </div>

      <div className="profilmusicfavoris">
        <RiHeartsFill className="favoris"/>
        <ul className="ulprofil">
          <li className="liprofil">
          <p>Alors la zone</p>
            <p>JUL</p>
          
          </li>
          <hr></hr>
          <li className="liprofil">
            <p>Anissa</p>
            <p>WEJDENE</p>
          </li>
          <hr></hr>
          <li className="liprofil">
            <p>Ma meilleure amie</p>
            <p>LORIE</p>
          </li>
          <hr></hr>
          <li className="liprofil">
            <p>Libérée, délivrée</p>
            <p>LA REINE DES NEIGES</p>
          </li>
          <hr></hr>
          <li className="liprofil">
            <p>We are the champions</p>
            <p>QUEEN</p>
          </li>
          <hr></hr>
          <li className="liprofil">
          <p>Bohemian Rhapsody</p>
            <p>QUEEN</p>
          </li>
          <hr></hr>
        </ul>
      </div>
    </div>
  );
};

export default Profil;
