import "./App.css";
import Bouton from "./components/Bouton/Bouton";
import Navbar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <Navbar />
        <p className="connexiontexte">Veuillez connecter votre SmartWatch.</p>
            <Bouton />
        </div>
    );
}

export default App;
