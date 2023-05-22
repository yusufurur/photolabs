import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, handlePhotoLike, openPhotoDetails } = props;
  console.log(">>>>>PhotoList", photos);

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
        onClick={() => openPhotoDetails(photo)}
      />
    );
  });

  return <ul className="photo-list">{photoItems}</ul>;
};

// PhotoList.defaultProps = {
//   photos: [
//     {
//       username: 'Jacob',
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 1,
//       hideUserName: false,
//     },
//     {
//       username: 'Jacob',
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 2,
//       hideUserName: false,
//     },
//     {
//       username: 'Jacob',
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 3,
//       hideUserName: false,
//     }
//   ]
// };

export default PhotoList;
