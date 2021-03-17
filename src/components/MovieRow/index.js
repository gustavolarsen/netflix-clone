import React, { useState } from 'react';
import './styles.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, movies }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let position = scrollX + Math.round(window.innerWidth / 2);

    if (position > 0) position = 0;
    setScrollX(position);
  };

  const handleRightArrow = () => {
    let position = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = movies.results.length * 180;

    if (window.innerWidth - listWidth > position) {
      position = window.innerWidth - listWidth - 60;
    }
    setScrollX(position);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            //180 é o valor definido para a largura de cada capa de  filme
            //na classe CSS .movieRow--item
            width: movies.results.length * 180,
          }}
        >
          {movies.results.length > 0 &&
            movies.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
