
import React from 'react';
import '../styles/PhotoListItem.scss';
import FavIcon from './FavIcon';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  return (
    <div className="photo-list--item" key={props.id}>
      <PhotoFavButton setLikes={props.setLikes}/>
      <h2 className='photo-list-user-info'>{props.username}</h2>
      <img className='photo-list--image' src={props.imageSource} alt="Jacobs image" width={300} />
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
