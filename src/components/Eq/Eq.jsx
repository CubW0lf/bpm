import React from "react";
import "./Eq.css";

const Eq = ({ play, active, mood }) => {
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
