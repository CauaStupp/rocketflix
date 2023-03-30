import { useState } from 'react'
import Search from './components/Search'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Search />
    </div>
  )
}

export default App
