import React from "react";
import useApplicationData from "./hooks/useApplicationData";
import Home from "./components/HomeRoute";
import "./App.scss";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModel from "./components/PhotoDetailsModal";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { selectedPhoto, setSelectedPhoto } = useApplicationData(); 
  const { likes, setLikes } = useApplicationData(); 
  const { photoLike, setPhotoLike } = useApplicationData();
  const {displayModal, setDisplayModal} = useApplicationData();

  const {openPhotoDetails} = useApplicationData();
  const {closePhotoDetails} = useApplicationData();
  const {handlePhotoLike} = useApplicationData();
  
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
      {displayModal && <PhotoDetailsModel
        onClose={closePhotoDetails}
        setLikes={setLikes}
        handlePhotoLike={handlePhotoLike}
        openPhotoDetails={openPhotoDetails}
        selectedPhoto={selectedPhoto}
       />}
    </div>
  );
};

export default App;