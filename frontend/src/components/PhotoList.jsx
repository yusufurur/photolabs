import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, handlePhotoLike, openPhotoDetails } = props;

  const photoItems = photos.map((photo) => {
    return (
      <PhotoListItem
        id={photo.id}
        key={photo.id}
        photo={photo.user.profile}
        imageSource={photo.urls.regular}
        username={photo.user.name}
        setLikes={props.setLikes}
        handlePhotoLike={handlePhotoLike}
        openPhotoDetails={openPhotoDetails}
        photoo={photo}
      />
    );
  });

  return <ul className="photo-list">{photoItems}</ul>;
};

export default PhotoList;
