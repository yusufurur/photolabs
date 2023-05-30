
import React, { useReducer, useEffect } from "react";
import reducer, {ACTIONS}  from "../reducers/application";

const initalState = {
  selectedPhoto: {},
  likes: 0,
  photoLike: [],
  displayModal: false,
  photos: [],
  topics: [],
  topicPhotos: []
};

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initalState);

  const openPhotoDetails = (photo) => {
    if (state.displayModal) return;
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
    
  };
  const fetchData = async () => {
    const photos = fetch('./api/photos')
    const topics = fetch('./api/topics')
    const response = await Promise.all([photos, topics]);
    const photoResponse = await response[0].json();
    const topicResponse = await response[1].json();
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoResponse});
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicResponse});
  } 

  async function setTopicPhotos (topicId) {
    const photos = fetch(`/api/topics/photos/${topicId}`)
    const response = await Promise.all([photos]);
    const photoResponse = await response[0].json();
    dispatch({ type: ACTIONS.SET_TOPIC_PHOTO_DATA, payload: photoResponse});
  } 

  useEffect(() => {
    fetchData();
  }, []);

  const closePhotoDetails = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const handlePhotoLike = (id) => {
    if (state.photoLike.includes(id)) {
      const newPhotoLike = state.photoLike.filter((photo) => photo !== id);
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: newPhotoLike});
      return;
    }
    const newPhotoLike = [...state.photoLike, id];
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: [...newPhotoLike] });
  };

  return {
    ...state,
    openPhotoDetails: openPhotoDetails,
    closePhotoDetails: closePhotoDetails,
    handlePhotoLike: handlePhotoLike,
    setTopicPhotos: setTopicPhotos
  }
}