import "./Profil.css";
import nicolas from "../../assets/images/nicolas.png";
import { RiHeartsFill } from "react-icons/ri";
import { BsMusicNoteList } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const Profil = () => {
    return (
        <div className="Profil">
            <div className="profil">
                <MdEdit className="edit" />
                <img src={nicolas} alt="user" className="user" />

                <div className="detailprofil">
                    <BsMusicNoteList className="note" />
                    <div>
                        <h2 className="profilh2">NICO LE BELGE</h2>
                        <h4 className="profilh4">MOOD PRÉFÉRÉ : CHILL</h4>
                    </div>
                </div>
            </div>

            <div className="profilmusicfavoris">
                <RiHeartsFill className="favoris" />
                <ul className="ulprofil">
                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <p>Alors la zone</p>
                        <p>JUL</p>
                    </li>
                    <hr></hr>

                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <p>Anissa </p>
                        <p>WEJDENE</p>
                    </li>
                    <hr></hr>
                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <p>Ma meilleure amie</p>
                        <p>LORIE</p>
                    </li>
                    <hr></hr>
                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <p>Libérée, délivrée</p>
                        <p>LA REINE DES NEIGES</p>
                    </li>
                    <hr></hr>
                    <li className="liprofil">
                        <IoIosClose className="close" />
                        <p>We are the champions</p>
                        <p>QUEEN</p>
                    </li>
                    <hr></hr>
                    <li className="liprofil">
                        <IoIosClose className="close" />
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
