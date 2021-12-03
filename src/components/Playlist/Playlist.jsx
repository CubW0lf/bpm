import { useContext } from "react";
import PlaylistContext from "../../contexts/PlaylistContext";
import "./Playlist.css";

const Playlist = () => {
    const { playlist, current, setCurrent } = useContext(PlaylistContext);

    return (
        <div className="Playlist">
            {playlist.length !== 0 ? (
                playlist.map((s, index) => (
                    <div className="playlist-full" key={index}>
                        <div
                            className={`song-full ${current === playlist.indexOf(s) ? "current" : ""}`}
                            onClick={() => setCurrent(playlist.indexOf(s))}
                        >
                            <span className="titre">{s.Titre}</span>
                            <span className="artiste">{s.Auteur}</span>
                        </div>
                    </div>
                ))
            ) : (
                <p className="white">Pas de playlist chargée</p>
            )}
        </div>
    );
};

export default Playlist;
