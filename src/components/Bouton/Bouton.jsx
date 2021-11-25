import "./Bouton.css";

const Bouton = () => {
    const bpm = Math.floor(Math.random() * (100 - 60) + 60);

    // const musicFork = ["60-85", "85-110", "110-135", "135-160"];

    let mood;
    if (bpm >= 60 && bpm <= 69) {
        mood = "meditation";
    } else if (bpm >= 70 && bpm <= 79) {
        mood = "chill";
    } else if (bpm >= 80 && bpm <= 89) {
        mood = "casual";
    } else if (bpm >= 90 && bpm <= 100) {
        mood = "energy";
    }

    console.log(bpm, mood);

    return <div className="Bouton"></div>;
};

export default Bouton;
