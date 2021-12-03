import { useContext } from "react";
import PlaylistContext from "../../contexts/PlaylistContext";
import "./SubMenu.css";

const SubMenu = () => {
    const { active, setActive } = useContext(PlaylistContext);

    return (
        <div className="minifull">
            <div className="mini" onClick={() => setActive("mini")}>
                <span>MINI</span>
                <div className={`border ${active === "mini" ? "active" : ""}`}></div>
            </div>
            <div className="full" onClick={() => setActive("full")}>
                <span>FULL</span>
                <div className={`border ${active === "full" ? "active" : ""}`}></div>
            </div>
        </div>
    );
};

export default SubMenu;
