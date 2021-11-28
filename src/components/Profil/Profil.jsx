import "./Profil.css";
import { RiHeartsFill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";

const Profil = ({ user }) => {
    return (
        <div className="Profil">
            {user && (
                <div className="infos-profil">
                    <div className="image-container">
                        <img src={user[0].picture.large} alt="profil utilisateur" />
                    </div>
                    <h2>
                        {user[0].name.first} {user[0].name.last}
                    </h2>
                    <span className="email">{user[0].email}</span>
                    <span>{user[0].cell}</span>
                    <span>MOOD PRÉFÉRÉ : CHILL</span>
                    <div className="socials">
                        <CgFacebook />
                        <FaInstagram />
                        <ImTwitter />
                        <SiLinkedin />
                    </div>
                </div>
            )}

            <div className="favorites-songs">
                <RiHeartsFill className="favoris" />
                <ul>
                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <span className="titre">Alors la zone</span>
                        <span className="artiste">JUL</span>
                    </li>

                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <span className="titre">Anissa </span>
                        <span className="artiste">WEJDENE</span>
                    </li>
                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <span className="titre">Ma meilleure amie</span>
                        <span className="artiste">LORIE</span>
                    </li>
                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <span className="titre">Libérée, délivrée</span>
                        <span className="artiste">LA REINE DES NEIGES</span>
                    </li>
                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <span className="titre">We are the champions</span>
                        <span className="artiste">QUEEN</span>
                    </li>
                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <span className="titre">Bohemian Rhapsody</span>
                        <span>QUEEN</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profil;
