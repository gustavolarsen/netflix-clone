import React from 'react';
import './styles.css';

export default ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let index in item.genres) {
    genres.push(item.genres[index].name);
  }

  let newOverview = item.overview;
  let overview = newOverview.split(' ');

  console.log(overview);

  if (overview.length > 30) {
    overview = overview.splice(0, 29);
    newOverview = overview.join(' ') + '...';
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.name} </div>
          <div className="featured--info">
            <div className="featured--points">
              {item.vote_average * 10}% relevante
            </div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
            <div className="featured--overview">{newOverview}</div>
            <div className="featured--buttons">
              <a className="featured--watchbutton" href="#">
                ► Assistir
              </a>
              <a className="featured--mylistbutton" href="#">
                + Minha Lista
              </a>
            </div>
            <div className="featured--genres">
              <span>Gêneros: </span>
              {genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
