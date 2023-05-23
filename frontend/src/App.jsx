import React, { useEffect, useState } from "react";
import useApplicationData from "./hooks/useApplicationData";
import Home from "./components/HomeRoute";
import "./App.scss";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModel from "./components/PhotoDetailsModal";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { selectedPhoto, setSelectedPhoto, likes, setLikes, photoLike, setPhotoLike, displayModal, setDisplayModal, openPhotoDetails, closePhotoDetails, handlePhotoLike } = useApplicationData(); 

  // const [photoData, setPhotoData] = useState([]);
  // const [topicData, setTopicData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const photos = fetch('./api/photos')
  //     const topics = fetch('./api/topics')
  //     const response = await Promise.all([photos, topics]);
  //     const topicResponse = await response[0].json();
  //     const photoResponse = await response[1].json();
  //     setPhotoData(photoResponse);
  //     setTopicData(topicResponse);
  //   } 
  //   fetchData();
  // }, []);

  // const onLoadTopics = async () => {
  //   const response = await fetch('./api/topics');
  //   const data = await response.json();
  //   setTopicData(data);
  // }

  return (
    <div className="App">
      <Home photos={photos}
        topics={topics}
        photoLike={photoLike}
        handlePhotoLike={handlePhotoLike}
        likes={likes}
        setLikes={setLikes}
        openPhotoDetails={openPhotoDetails}
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