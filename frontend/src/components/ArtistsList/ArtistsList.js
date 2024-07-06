import React, { useState }  from "react";
import "../../css/artists-list-styles.css"
import ArtistCard from "./ArtistCard"
import PriceFilter from "./PriceFilter";
import priceIcon from "../../icons/price.svg"
import categoryIcon from "../../icons/category.svg"
import cityIcon from "../../icons/city.svg"

const ArtistsList = ({ users, error }) => {
    const [isPriceFilterVisible, setIsPriceFilterVisible] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);

    const togglePriceFilter = () => {
        setIsPriceFilterVisible(prevState => !prevState);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    if (error) {
        return <div className="main">
            <h1 className="title error">Сервер сейчас недоступен</h1>
        </div>
    }

    return (
        <div className="main">
            <div className="filters">
                <h1 className="filters-title title">
                    Explore Marketplace
                </h1>
                <div className="filters-btns-group">
                    <button className="white-button filters__btn" onClick={togglePriceFilter}>
                        <img src={priceIcon} alt="price icon"/>
                        Прайс
                    </button>
                    <button className="white-button filters__btn">
                        <img src={categoryIcon} alt="category icon"/>
                        Категория
                    </button>
                    <button className="white-button filters__btn">
                        <img src={cityIcon} alt="city icon"/>
                        Город
                    </button>
                </div>
                {isPriceFilterVisible && (
                    <div className="price-filter-container">
                        <PriceFilter
                            minPrice={minPrice}
                            maxPrice={maxPrice}
                            onMinPriceChange={handleMinPriceChange}
                            onMaxPriceChange={handleMaxPriceChange}
                        />
                    </div>
                )}
            </div>
            <div className="artists">
                {users.map((user) => (
                    <ArtistCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default ArtistsList;