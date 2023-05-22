import React from "react";
import PhotoList from "./PhotoList";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";

const PhotoDetailsModal = (props) => {
  
  const { selectedPhoto, onClose, handlePhotoLike, openPhotoDetails, id, setLikes } = props;
  const handleClick = () => {
    onClose && onClose();
  };
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal--close-button" onClick={handleClick}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div>
      <PhotoFavButton setLikes={setLikes} handlePhotoLike={handlePhotoLike} id={selectedPhoto.id} />
      <img className='photo-details-modal--image' src={selectedPhoto.urls.full} />
      </div>
      <div className="photo-details-modal--images">
      <h1 className="photo-details-modal--header">Similar Photos</h1>
      {selectedPhoto.similar_photos && <PhotoList photos={Object.values(selectedPhoto.similar_photos)} handlePhotoLike={handlePhotoLike} openPhotoDetails={openPhotoDetails} />}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;