import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import './App.css';
import Header from './components/Header';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando todos os filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o filme em destaque
      let originals = list.filter((item) => item.slug === 'originals');

      //pega um filme aletorio dentro da categoria originals
      let randonFeatured = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      let featured = originals[0].items.results[randonFeatured];

      //busca as informações do filme selecionado para exibir em destaque
      let featuredInfo = await Tmdb.getMovieInfo(featured.id, 'tv');

      setFeaturedData(featuredInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListner = () => {
      if (window.scrollY > 120) setBlackHeader(true);
      else setBlackHeader(false);
    };

    console.log(window.scrollY);

    window.addEventListener('scroll', scrollListner);

    return () => {
      window.removeEventListener('scroll', scrollListner);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((category, key) => (
          <MovieRow key={key} title={category.title} movies={category.items} />
        ))}
      </section>

      <footer>
        Feito com
        <span role="img" aria-label="coração">
          {' '}
          💗{' '}
        </span>
        por Gustavo Larsen <br />
        Este site foi desenvolvido para fins de estudo de ReactJS <br />
        Direitos de marca para Netflix <br />
        Dados dos filmes e séries estraídos da API{' '}
        <a href="https://www.themoviedb.org/">themoviedb.org</a>
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://www.houseguides.org/wp-content/uploads/Using-Netflix-with-a-vpn.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
};
