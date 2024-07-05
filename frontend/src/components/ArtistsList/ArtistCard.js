import React from "react";
import "../../css/artists-list-styles.css"

const ArtistCard = ({ user }) => {
        return (
            <div className="artist-card card">
                <div className="card__img" style={{backgroundImage: `url(${user.picture})`}}></div>
                <h3 className="card__title">{user.name}</h3>
                <div className="card-footer">
                    <div className="card-price">
                        <small className="card-price__label">Current bid</small>
                        <div className="price__box">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.376 1.63513L5.8623 10.8982L11.376 14.2064L16.8897 10.8982L11.376 1.63513ZM5.8623 12.0009L11.376 19.7201L16.8897 12.0009L11.376 15.3092L5.8623 12.0009Z" fill="#141416"/>
                            </svg>
                            <span className="price__value">{user.price}</span>
                        </div>
                    </div>
                    <button className="card__buy black-button">Заказать</button>
                </div>
            </div>
        );
}

export default ArtistCard;
