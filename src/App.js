import { Routes, Route } from "react-router-dom";
import "./App.css";
import Bouton from "./components/Bouton/Bouton";
import Navbar from "./components/NavBar/NavBar";
import Profil from "./components/Profil/Profil";
import GenreBouton from "./components/GenreBouton/GenreBouton";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <p className="connexiontexte">Veuillez connecter votre SmartWatch.</p>
                <Routes>
                    <Route path="/" element={<Bouton />} />
                    <Route path="/user" element={<Profil />} />
                    <Route path="/genres" element={<GenreBouton />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
