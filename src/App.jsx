import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  async function fetchMovies(title) {
    const response = await fetch(`${import.meta.env.VITE_REACT_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search); 
  }

  useEffect(() => {
    fetchMovies('Star wars');
  }, []);

  return (
    <div>
      <h1>Movies app</h1>
    </div>
  )
}

export default App
