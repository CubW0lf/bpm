import "./App.css";
import Bouton from "./components/Bouton/Bouton";
import Navbar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <p className="connexiontexte">Veuillez connecter votre SmartWatch.</p>
                <Bouton />
            </main>
        </div>
    );
}

export default App;
