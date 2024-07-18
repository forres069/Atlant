// Preview.js
import React from 'react';
import Slider from './Slider';
import '../../css/preview-styles.css';

const Preview = () => {
  return (
    <div className="preview">
      <div className="preview-text">
        <hr className="hr" />
        <h1 className="preview-text-title">
          Идеальный артист для твоего дня.
        </h1>
        <p className="preview-text-description">
          Закажи артиста на праздник
          Найди идеального исполнителя
          на нашем портале с тысячами
          профессионалов и получи <b>скидку $20</b>.
        </p>
        <div className="preview-text-buttons-group">
          <button className="black-button explore">УЗНАТЬ БОЛЬШЕ</button>
          <button className="white-button create">СОЗДАТЬ</button>
        </div>
        <div className="preview-text-features">
          <div className="preview-text-features__item">
            <h3>0К+</h3>
            <small>Пользователей</small>
          </div>
          <div className="preview-text-features__item">
            <h3>0К+</h3>
            <small>Талантов</small>
          </div>
          <div className="preview-text-features__item">
            <h3>0К+</h3>
            <small>Знаменитойстей</small>
          </div>
        </div>
      </div>
      <div className="preview-media">
        <Slider />
      </div>
    </div>
  );
};

export default Preview;
