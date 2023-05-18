import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

 const photo = new Array(3).fill(0)

  return (
  <div className="App">
    <PhotoList />
  </div>
  )
}

export default App