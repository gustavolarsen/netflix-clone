import React from 'react';
import './styles.css';

export default ({ black }) => {
  return (
    <header className={black ? 'black' : 'transparent'}>
      <div className="header--logo">
        <a href="#">
          <img
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="#">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Usuário"
          />
        </a>
      </div>
    </header>
  );
};
