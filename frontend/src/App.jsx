import React from 'react';
import { useState } from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import FavIcon from './components/FavIcon';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [likes, setLikes] = useState(0)

 const photo = new Array(3).fill(0)

  return (
  <div className="App">
    <PhotoList />
    <PhotoListItem />
    <FavIcon />
  </div>
  )
}

export default App