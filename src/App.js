import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import GenreBouton from "./components/GenreBouton/GenreBouton";
import Main from "./components/Main/Main";
import Navbar from "./components/NavBar/NavBar";
import Profil from "./components/Profil/Profil";
import "./App.css";
import "./desktop.css";

function App() {
    const [user, setUser] = useState();

    useEffect(() => {
        const randomUser = "https://randomuser.me/api/";

        axios.get(randomUser).then(({ data }) => {
            setUser(data.results);
        });
    }, []);

    return (
        <div className="App">
            <Navbar user={user} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/user" element={<Profil user={user} />} />
                <Route path="/genre" element={<GenreBouton />} />
            </Routes>
        </div>
    );
}

export default App;
