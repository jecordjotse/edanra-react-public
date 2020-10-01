import { combineReducers } from "redux";

import propertiesReducer from "./properties/properties.reducer";
import userReducer from "./user/user.reducer";
import propertyUploadReducer from "./property-upload/property-upload.reducer";
import staticDataReducer from "./static-data/static-data.reducer";
import searchReducer from "./search/search.reducer";
import paymentReducer from "./payment/payment.reducer";
import PhotosListReducer from "./images/images.list.reducer";
import UploadedPhotosReducer from "./images/images.uploaded.reducer";

const rootReducer = combineReducers({
  properties: propertiesReducer,
  user: userReducer,
  propertyUpload: propertyUploadReducer,
  staticData: staticDataReducer,
  search: searchReducer,
  payment: paymentReducer,
  photos: PhotosListReducer,
  uploadedPhotos: UploadedPhotosReducer,
});

export default rootReducer;
