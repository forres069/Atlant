import React from 'react';
import './index.css';
import Header from './components/Header';
import ArtistsList from "./components/ArtistsList/ArtistsList";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            error: false,
            searchQuery: ''
        };
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/v1_artists/list/")
            .then((res) => {
                this.setState({ users: res.data });
            })
            .catch((error) => {
                this.setState({ error: true });
            });
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };
    render() {
        const { users, searchQuery } = this.state;
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return <React.Fragment>
            <Header searchQuery={searchQuery} onSearchChange={this.handleSearchChange}/>
            <ArtistsList users={filteredUsers}/>
        </React.Fragment>
    }
}
export default App