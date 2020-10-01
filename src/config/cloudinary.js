window.cloudinary.setCloudName("dmvymb8nn");
let toTog = true;
var widget = window.cloudinary.createUploadWidget(
  {
    cloudName: "dmvymb8nn",
    uploadPreset: "qrzvjxti",
    cropping: true,
    multiple: false,
    singleUploadAutoClose: false,
    showCompletedButton: false,
    form: "#my_form",
    thumbnails: ".uploaded_thumbs",
    autoMinimize: true,
    thumbnailTransformation: "c_thumb,g_custom,w_90,h_60",
  },
  (error, result) => {
    if (result.event === "close") {
      console.log(result.event);
    }

    if (result.event === "success") {
      var contain = document.getElementsByClassName("cloudinary-thumbnail");
      console.log("before ", contain);
      var i;
      for (i = 0; i < contain.length; i++) {
        contain[i].onclick = function (e) {
          var j;
          for (j = 0; j < contain.length; j++) {
            contain[j].classList.remove("selected");
          }
          e.currentTarget.classList.toggle("selected");
          console.log("from event ", e.currentTarget);
        };
      }
    }

    if (result.event === "queues-end") {
      widget.close();
    }

    if (result.event === "close") {
      widget.update({
        multiple: toTog,
      });
      toTog = !toTog;
    }
  }
);

export const makeMultiple = () => {
  widget.update({
    cropping: false,
    multiple: true,
  });
};

export const makeSingle = () => {
  widget.update({
    cropping: true,
    multiple: false,
  });
};
export { widget };
