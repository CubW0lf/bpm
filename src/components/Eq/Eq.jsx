import React from "react";
import "./Eq.css";

const Eq = ({ play, active }) => {
    return play ? (
        active === "mini" ? (
            <div className="Eq">
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
