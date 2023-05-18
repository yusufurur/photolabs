
import React from 'react';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ username, imageSource, id, hideUserName }) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt="user" />
      {!hideUserName && <p>{username}</p>}
    </div>
  );
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem;
