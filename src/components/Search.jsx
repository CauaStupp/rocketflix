import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_KEY, BASE_URL, IMG_URL } from '../api/api';
import GetMovie from './GetMovie';
import Logo from '../assets/logo.png'
import styles from './Search.module.css';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [verify, setVerify] = useState(false)
  const [loading, setLoading] = useState(false);

  async function updateMovie() {
    try {
      setLoading(true);
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=pt-BR',
        {
          params: {
            api_key: API_KEY,
            page: Math.floor(Math.random() * 500) + 1
          }
        }
      )
      setMovies(response.data.results)
      movies ? setVerify(true) : setVerify(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }
  }

  return (
    <div className={styles.search}>
      <img src={Logo} alt="Logo" />
      <h1>Não sabe o que assistir?</h1>

      {verify && (
        <GetMovie 
          title={movies[0].title}
          image={movies[0].poster_path}
          desc={movies[0].overview}
        />
      )}

      {loading ? (
        <button onClick={updateMovie}>
          <img src={Logo} alt="Logo icon" disabled />
          Procurando...
        </button>
      ) : (
        <button onClick={updateMovie}>
          <img src={Logo} alt="Logo icon" />
          Encontrar filme
        </button>
      )}
      
      <p>
        Clique em "Encontrar filme" que traremos informações
        de algum filme para você assistir hoje.
      </p>
    </div>
  )
}

export default Search