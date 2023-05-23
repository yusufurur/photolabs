
import React, { useState, useEffect, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload }

      case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, likes: state.likes + 1, photoLike : [...action.payload] }

      case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, likes: state.likes - 1, photoLike : [...action.payload] }

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, displayModal: !state.displayModal}
        default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initalState = {
  selectedPhoto: {},
  setSelectedPhoto: () => {},
  likes: 0,
  setLikes: () => {},
  photoLike: [],
  setPhotoLike: () => {},
  displayModal: false,
  setDisplayModal: () => {},
};

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initalState);

  const openPhotoDetails = (photo) => {
    if (state.displayModal) return;
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
    
  };

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
  }
}