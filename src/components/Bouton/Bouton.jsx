import "./Bouton.css";

const Bouton = ({ mood, animationHeart, handleBpm, animation }) => {
    // const musicFork = ["60-85", "85-110", "110-135", "135-160"];

    return (
        <>
            <div className="Bouton">
                <span className="mood">{mood !== "" ? mood : animationHeart ? "" : "Activer"}</span>
                <div className={`inner ${animation ? "pulse" : ""}`} onClick={handleBpm}>
                    <svg width="253" height="126" viewBox="0 0 253 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 63H50.7847L66.4818 1L82.1788 125L96.0292 33L108.033 94L120.036 63H137.58L151.431 33L167.128 94L176.361 63H253"
                            strokeWidth="5"
                            className={`waveform ${animationHeart ? "heart" : ""}`}
                            pathLength="1"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Bouton;
