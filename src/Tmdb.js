const API_KEY = 'api_key=Sua_Api_Key_Aqui';
const API_BASE = 'https://api.themoviedb.org/3';
const LANGUAGE = 'language=pt-BR';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();

  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais Netflix',
        items: await basicFetch(
          `/discover/tv?with_network=213&${LANGUAGE}&${API_KEY}`
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados',
        items: await basicFetch(`/trending/all/week?${LANGUAGE}&${API_KEY}`),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?${LANGUAGE}&${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(
          `/discover/movie?with_genres=28&${LANGUAGE}&${API_KEY}`
        ),
      },

      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(
          `/discover/movie?with_genres=35&${LANGUAGE}&${API_KEY}`
        ),
      },

      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/discover/movie?with_genres=27&${LANGUAGE}&${API_KEY}`
        ),
      },

      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(
          `/discover/movie?with_genres=10749&${LANGUAGE}&${API_KEY}`
        ),
      },

      {
        slug: 'documentary',
        title: 'Documentario',
        items: await basicFetch(
          `/discover/movie?with_genres=99&${LANGUAGE}&${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?${LANGUAGE}&${API_KEY}`);
          break;

        case 'movie':
          info = await basicFetch(`/movie/${movieId}?${LANGUAGE}&${API_KEY}`);

          break;

        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
