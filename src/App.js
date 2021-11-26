import { Routes, Route } from "react-router-dom";
import "./App.css";
import Bouton from "./components/Bouton/Bouton";
import GenreBouton from "./components/GenreBouton/GenreBouton";
import Navbar from "./components/NavBar/NavBar";
import Profil from "./components/Profil/Profil";


function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Bouton />} />
                    <Route path="/user" element={<Profil />} />
                    <Route path="/genre" element={<GenreBouton />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
