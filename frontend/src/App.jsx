import React from "react";
import { useState } from "react";
import Home from "./components/HomeRoute";
import "./App.scss";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likes, setLikes] = useState(0);
  const [photoLike, setPhotoLike] = useState([]);

  const handlePhotoLike = (id) => {
    console.log(">>>>>handlePhotoLike", id);
    if (photoLike.includes(id)) {
      const newPhotoLike = photoLike.filter((photo) => photo !== id);
      setPhotoLike(newPhotoLike);
      return;
    }
    const newPhotoLike = [...photoLike];
    setPhotoLike([...newPhotoLike, id]);
  };
  const photo = new Array(3).fill(0);

  return (
    <div className="App">
      <Home photos={photos} topics={topics} photoLike={photoLike} handlePhotoLike={handlePhotoLike} />
    </div>
  );
};

export default App;