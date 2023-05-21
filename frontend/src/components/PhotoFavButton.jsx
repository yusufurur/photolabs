import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { handlePhotoLike, id, setLikes } = props;

  return (
    <div className="photo-list--fav-icon" onClick={() => handlePhotoLike(id)}>
      <div className="photo-list--fav-icon-svg">
        <FavIcon setLikes={setLikes} />
      </div>
    </div>
  );
}

export default PhotoFavButton;