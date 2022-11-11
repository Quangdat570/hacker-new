import React, { useState } from 'react'
import styles from './Search.module.css'

const SearchForm = () => {
  const [query , setHandleSearch] = useState('REACT')

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <h2 className={styles.h2}>search hacker news</h2>
      <input
        type='text'
        className={styles.input}
        value={query}
        onChange={(e) => setHandleSearch(e.target.value)}
      />
      
    </form>
  )
}

export default SearchForm
