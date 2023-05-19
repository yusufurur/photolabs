import React, { useState } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import "../styles/HomeRoute.scss";

const Home = (props) => {
  const { topics } = props;

  const [likes, setLikes] = useState(0);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} setLikes={setLikes} />
      <PhotoList setLikes={setLikes} />
    </div>
  );
};

export default Home;