import React from 'react';
import { useState } from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';
import FavIcon from './components/FavIcon';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [likes, setLikes] = useState(0)

 const photo = new Array(3).fill(0)

  return (
  <div className="App">
     <TopNavigationBar />
    <TopicList />
    <PhotoList setLikes={setLikes}/>
    <PhotoListItem likes={likes} />
  </div>
  )
}

export default App