import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import ArtistsList from "./components/ArtistsList/ArtistsList";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/v1_artists/list/")
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
        <React.Fragment>
            <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
            <ArtistsList users={filteredUsers} />
        </React.Fragment>
    );
}

export default App;
