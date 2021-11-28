import React from "react";
import watchSvg from "../../assets/images/watch.png";
import noWatchSvg from "../../assets/images/no-watch.png";
import "./Watch.css";

const Watch = ({ watch, handleWatch, active }) => {
    return (
        <p className="Watch" onClick={handleWatch}>
            {active !== "full" ? (
                watch ? (
                    <img src={watchSvg} alt="Montre Connectée" className="watch" />
                ) : (
                    <img src={noWatchSvg} alt="Montre Connectée" className="no-watch" />
                )
            ) : (
                ""
            )}
        </p>
    );
};

export default Watch;
