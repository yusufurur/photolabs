
import React from 'react';
import '../styles/PhotoListItem.scss';
import FavIcon from './FavIcon';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { handlePhotoLike, id, setLikes, username, imageSource, onClick } = props;
  return (
    <div className="photo-list--item" key={id} onClick={onClick}>
      <PhotoFavButton setLikes={setLikes} handlePhotoLike={handlePhotoLike} id={id} />
      <h2 className='photo-list-user-info'>{username}</h2>
      <img className='photo-list--image' src={imageSource} alt={username} width={300} />
    </div>
  );
}

// PhotoListItem.defaultProps = {
//   username: 'Jacob',
//   imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//   id: 1,
//   hideUserName: false,
// }

export default PhotoListItem;
