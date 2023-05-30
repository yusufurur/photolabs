import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { handlePhotoLike, id, setLikes } = props;

  return (
    <div className="photo-list--fav-icon photo-list--fav-icon-svg" onClick={() => handlePhotoLike(id)}>
        <FavIcon setLikes={setLikes} />
    </div>
  );
}

export default PhotoFavButton;