import {BrowserRouter as  Router ,  Routes ,  Route  } from  'react-router-dom' ;
import "./App.css";
import Bouton from "./components/Bouton/Bouton";
import Navbar from "./components/NavBar/NavBar";
import Profil from './components/Profil/Profil';

function App() {
    return (
        <div className="App">
            <Router>
            <Navbar />
        <p className="connexiontexte">Veuillez connecter votre SmartWatch.</p>
            <Bouton />
            <Routes>
                    
                <Route path='/user' element={<Profil />}/>
            </Routes>
            </Router>
        </div>
    );
}

export default App;
