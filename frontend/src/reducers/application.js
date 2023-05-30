
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_TOPIC_PHOTO_DATA: 'SET_TOPIC_PHOTO_DATA'
}

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload }

      case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, likes: state.likes + 1, photoLike : [...action.payload] }

      case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload }

      case ACTIONS.SET_TOPIC_PHOTO_DATA:
        return  {...state, topicPhotos: action.payload}

      case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload }

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