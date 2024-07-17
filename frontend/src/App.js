import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import ArtistsList from "./components/ArtistsList/ArtistsList";
import Signup from "./components/Auth/Signup"
import Login from "./components/Auth/Login"
import Activate from "./components/EmailConfirm/Activate"
import Confirm from "./components/EmailConfirm/Confirm"
import Modal from "./components/Modal"
import ToggleSwitch from './components/ToggleSwitch';
import axios from "axios";


const App = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken') ;
        console.log(`JWT ${token}`)
        axios.get("http://127.0.0.1:8000/v1_artists/list/"
        )
        .then((res) => {
            setUsers(res.data);
        })
        .catch((error) => {
            setError(true);
        });
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
            <BrowserRouter>
                <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} openModal={openModal} />
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    {isLogin ? <Login onClose={closeModal} /> : <Signup onClose={closeModal} />}
                    <ToggleSwitch isOn={isLogin} handleToggle={handleToggle} />
                </Modal>
                <Routes>
                    <Route
                        path="/"
                        index
                        element={
                        <ArtistsList
                            users={filteredUsers}                                
                            error={error}/>
                        }
                    />
                    <Route path="confirm" element={<Confirm/>} />
                    <Route path="activate/:uid/:token" element={<Activate/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
