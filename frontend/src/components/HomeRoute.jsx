import React, { useState } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import PhotoDetailsModel from "./PhotoDetailsModal";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, photos, photoLike, handlePhotoLike, likes, setLikes, openPhotoDetails } = props;
  
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  // const openPhotoDetails = (photo) => {
  //   console.log(">>>>>openPhotoDetails", photo);
  //   setSelectedPhoto(photo);
  // };

  // const closePhotoDetails = () => {
  //   setSelectedPhoto(null);
  // };

  // const [likes, setLikes] = useState(0);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} setLikes={setLikes} photoLike={photoLike}/>
      <PhotoList photos={photos} handlePhotoLike={handlePhotoLike} openPhotoDetails={openPhotoDetails} />
      {/* {selectedPhoto && <PhotoDetailsModel photo={selectedPhoto} onClose={closePhotoDetails} setLikes={setLikes} handlePhotoLike={handlePhotoLike} openPhotoDetails={openPhotoDetails} />} */}
    </div>
  );
};

export default HomeRoute;
