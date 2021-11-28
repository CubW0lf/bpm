import React from "react";
import watchSvg from "../../assets/images/watch.png";
import "./Watch.css";

const Watch = ({ watch, handleWatch }) => {
    return (
        <p className="connexiontexte" onClick={handleWatch}>
            {watch ? (
                <img src={watchSvg} alt="Montre Connectée" style={{ fill: "pink" }} className="watch" />
            ) : (
                "Veuillez connecter votre SmartWatch."
            )}
        </p>
    );
};

export default Watch;
