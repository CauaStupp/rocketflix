import React from 'react'
import { IMG_URL } from '../api/api';
import styles from './GetMovie.module.css';

const GetMovie = ({ title, image, desc }) => {
  return (
    <div className={styles.movie}>
      <img src={IMG_URL + image} alt="filme" />
      <div className={styles.text}>
          <h1>{title}</h1>
          <p>
            {desc}
          </p>
      </div>
      
      
    </div>
  )
}

export default GetMovie