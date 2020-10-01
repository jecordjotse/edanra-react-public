import React from "react";
import { connect } from "react-redux";
import { photosUploaded } from "../../redux/images/images.action.js";
import { widget } from "../../config/cloudinary.js";
import "./image.list.css";

const ImageList = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let str = e.target
      .querySelector('input[type="hidden"]')
      .getAttribute("data-cloudinary");

    console.log(JSON.parse(str));
    const imageTags = e.target.querySelectorAll('input[type="hidden"]');
    var i;
    let images = { main: "" };
    for (i = 0; i < imageTags.length; i++) {
      images[i] = JSON.parse(imageTags[i].getAttribute("data-cloudinary"))[
        "url"
      ];
    }
    console.log(images);
  };
  const doned = (e) => {
    console.log("triggered");
  };

  const see = (e) => {
    console.log("Target ", e.target.getAttribute("src"));
    console.log("Current Target ", e.currentTarget);
  };
  const uploadImageWithCloudinary = (e) => {
    e.preventDefault();
    widget.update({
      form: "#my_form",
      thumbnails: ".uploaded_thumbs",
    });
    widget.open();
    console.log(widget);
  };

  return (
    <form
      id="my_form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      onClick={see}
    >
      <button className="upload_link" onClick={uploadImageWithCloudinary}>
        Add photos with Cloudinary File upload
      </button>
      <div id="my_container" className="uploaded_thumbs"></div>
      <button type="submit"> Done</button>
      <input name="fileUp" type="file" onChange={doned} />
    </form>
  );
};

export default connect((state) => ({ photos: state.photos }), {
  onPhotosUploaded: photosUploaded,
})(ImageList);
