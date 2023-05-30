import React, { useEffect, useState } from "react";
import useApplicationData from "./hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import "./App.scss";
import PhotoDetailsModel from "./components/PhotoDetailsModal";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { selectedPhoto, topicPhotos, likes, setLikes, photoLike, setTopicPhotos, displayModal, openPhotoDetails, closePhotoDetails, handlePhotoLike, photos, topics } = useApplicationData(); 
  
  const renderPhotos = topicPhotos.length > 0 ?  topicPhotos : photos

  return (
    <div className="App">
      <HomeRoute photos={renderPhotos}
        topics={topics}
        photoLike={photoLike}
        handlePhotoLike={handlePhotoLike}
        likes={likes}
        setLikes={setLikes}
        openPhotoDetails={openPhotoDetails}
        handleTopicLabel={(topicLabel) => setTopicPhotos(topicLabel)}
        />
      {displayModal && (<PhotoDetailsModel
        onClose={closePhotoDetails}
        setLikes={setLikes}
        handlePhotoLike={handlePhotoLike}
        openPhotoDetails={openPhotoDetails}
        selectedPhoto={selectedPhoto}
       />)}
    </div>
  );
};

export default App;