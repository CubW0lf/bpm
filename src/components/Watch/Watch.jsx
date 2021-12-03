import { useContext, useState } from "react";
import PlaylistContext from "../../contexts/PlaylistContext";
import watchSvg from "../../assets/images/watch.png";
import noWatchSvg from "../../assets/images/no-watch.png";
import "./Watch.css";

const Watch = () => {
    const [watch, setWatch] = useState(false);
    const { active } = useContext(PlaylistContext);
    return (
        <p className="Watch" onClick={() => setWatch(!watch)}>
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
