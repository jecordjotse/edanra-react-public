import ImageActionTypes from "./images.types";

const photosListReducer = (photos = [], action) => {
  switch (action.type) {
    case ImageActionTypes.PHOTOS_FETCHED:
      return [...action.photos];
    case ImageActionTypes.PHOTOS_UPLOADED: {
      return [...action.photos, ...photos];
    }
    case ImageActionTypes.DELETE_UPLOADED_PHOTO:
      return photos.filter((photo) => photo.public_id !== action.publicId);
    default:
      return [...photos];
  }
};

export default photosListReducer;
