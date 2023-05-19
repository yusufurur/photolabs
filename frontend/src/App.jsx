import React from "react";
import { useState } from "react";
import PhotoListItem from "./components/PhotoListItem";
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import TopNavigationBar from "./components/TopNavigationBar";
import Home from "./components/HomeRoute";
import FavIcon from "./components/FavIcon";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likes, setLikes] = useState(0);

  const photo = new Array(3).fill(0);

  return (
    <div className="App">
      <TopNavigationBar likes={likes} setLikes={setLikes} />
      <TopicList />
      <PhotoList setLikes={setLikes} />
      <PhotoListItem likes={likes} />
      <Home />
    </div>
  );
};

export default App;