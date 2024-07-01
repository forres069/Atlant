import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import ArtistsList from "./components/ArtistsList/ArtistsList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <ArtistsList/>
    </div>
);

reportWebVitals();
