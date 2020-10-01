import ImageActionTypes from "./images.types";

export const photosFetched = (photos) => ({
  type: ImageActionTypes.PHOTOS_FETCHED,
  photos: photos,
});

export const photosUploaded = (photos) => ({
  type: ImageActionTypes.PHOTOS_UPLOADED,
  photos: photos,
});

export const updateUploadedPhoto = (uploadedPhoto) => ({
  type: ImageActionTypes.UPDATE_UPLOADED_PHOTO,
  uploadedPhoto: uploadedPhoto,
});

export const deleteUploadedPhoto = (publicId) => ({
  type: ImageActionTypes.DELETE_UPLOADED_PHOTO,
  publicId: publicId,
});
