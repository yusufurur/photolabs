import React, { useState } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, photos, photoLike, handlePhotoLike } = props;
  // console.log(">>>>>Home", props);
  const [likes, setLikes] = useState(0);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} setLikes={setLikes} photoLike={photoLike}/>
      <PhotoList photos={photos} handlePhotoLike={handlePhotoLike}/>
    </div>
  );
};

export default HomeRoute;
