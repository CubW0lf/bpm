import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { useState } from "react";
import "./NavBar.css";

const Navbar = ({ user }) => {
    const [displayMenu, setDisplayMenu] = useState(false);

    const handleDisplay = () => {
        setDisplayMenu(!displayMenu);
    };

    return (
        <div className="menu-wrapper">
            <nav className={`full ${displayMenu ? "display" : "hidden"}`}>
                <ul>
                    <li>Comment Ca marche ?</li>
                    <li>Configuration</li>
                    {user ? "" : "Inscription"}
                    <li>{user ? "Déconnexion" : "Connexion"}</li>
                </ul>
            </nav>
            <nav className="minified">
                <GrMenu className="burger" onClick={handleDisplay} />
                <Link to={"/"} className="logo">
                    <h1>Beat Per Move</h1>
                </Link>
                <Link to={"/user"}>
                    <img src={user && user[0].picture.large} alt={user && user[0].name.first} className="user-thumbnail" />
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
