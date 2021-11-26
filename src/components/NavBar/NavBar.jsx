import "./NavBar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="header-container">
                <AiOutlineMenu className="burger" />
                <Link to={"/"} className="logo">
                    <h1>Beat Per Move</h1>
                </Link>
                <Link to={"/user"}>
                    <FaUserAlt className="logouser" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
