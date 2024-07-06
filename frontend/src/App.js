import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import ArtistsList from "./components/ArtistsList/ArtistsList";
import axios from "axios";

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <React.Fragment>
            <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
            <ArtistsList users={filteredUsers} />
        </React.Fragment>
=======
            <BrowserRouter>
                <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
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
                          <Route path="auth" element={<Auth />} />
                          <Route path="confirm" element={<Confirm/>} />
                          <Route path="activate" element={<Activate/>}/>
                      </Routes>
            </BrowserRouter>
>>>>>>> Stashed changes
    );
}

export default App;
