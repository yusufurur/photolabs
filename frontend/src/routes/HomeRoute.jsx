import React from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, photos, photoLike, handlePhotoLike, setLikes, openPhotoDetails, handleTopicLabel } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} setLikes={setLikes} photoLike={photoLike} handleTopicLabel={(topicLabel) => handleTopicLabel(topicLabel)}/>
      <PhotoList photos={photos} handlePhotoLike={handlePhotoLike} openPhotoDetails={openPhotoDetails} />
    </div>
  );
};

export default HomeRoute;