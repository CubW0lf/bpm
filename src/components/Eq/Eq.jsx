import { useContext } from "react";
import PlaylistContext from "../../contexts/PlaylistContext";
import "./Eq.css";

const Eq = () => {
    const { play, active, mood } = useContext(PlaylistContext);
    return play ? (
        active === "mini" ? (
            <div
                className={`Eq ${mood === "Chill" ? "chill" : ""} ${mood === "Casual" ? "casual" : ""} ${
                    mood === "Meditation" ? "meditation" : ""
                } ${mood === "Energy" ? "energy" : ""}`}
            >
                <div className="bar b1"></div>
                <div className="bar b2"></div>
                <div className="bar b3"></div>
                <div className="bar b4"></div>
            </div>
        ) : (
            ""
        )
    ) : (
        ""
    );
};

export default Eq;
