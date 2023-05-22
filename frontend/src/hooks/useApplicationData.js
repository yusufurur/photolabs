import React, { useState, useEffect } from "react";

export default function useApplicationData() {
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [likes, setLikes] = useState(0);
  const [photoLike, setPhotoLike] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const openPhotoDetails = (photo) => {
    if (displayModal) return;
    setDisplayModal(!displayModal)
    setSelectedPhoto(photo);
  };

  const closePhotoDetails = () => {
    setDisplayModal(false);
  };

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

  return {
    selectedPhoto,
    setSelectedPhoto,
    likes,
    setLikes,
    photoLike,
    setPhotoLike,
    displayModal,
    setDisplayModal,
    openPhotoDetails,
    closePhotoDetails,
    handlePhotoLike,
  }
}