import React from 'react';

const PriceFilter = ({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) => {
    return (
        <div className="price-filter">
            <div>
                <label>Min Price: </label>
                <input
                    type="number"
                    value={minPrice}
                    onChange={onMinPriceChange}
                />
            </div>
            <div>
                <label>Max Price: </label>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={onMaxPriceChange}
                />
            </div>
            <div>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={minPrice}
                    onChange={onMinPriceChange}
                />
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={maxPrice}
                    onChange={onMaxPriceChange}
                />
            </div>
        </div>
    );
};

export default PriceFilter;