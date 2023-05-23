
import React from 'react';
import '../styles/PhotoListItem.scss';
import FavIcon from './FavIcon';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { handlePhotoLike, id, setLikes, username, imageSource, openPhotoDetails, photoo } = props;
  return (
    <div className="photo-list--item" key={id} >
      <PhotoFavButton setLikes={setLikes} handlePhotoLike={handlePhotoLike} id={id} />
      
      <img className='photo-list--image' src={imageSource} alt={username} width={300} onClick={() => openPhotoDetails(photoo)} />
      <h2 className='photo-list-user-info photo-list--user-details'> {username}</h2>
    </div>
  );
}

export default PhotoListItem;