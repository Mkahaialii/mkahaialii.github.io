// // gind all the images with the data-src atribute

// let imagesToLoad = document.querySelectorAll("img[data-src]");
//
// const loadImages = (image) => {
//   image.setAttribute("src", image.getAttribute("data-src"));
//   image.onload = () => {
//     image.removeAttribute("data-src");
//   };
// };

// //loop through each image to load it

// imagesToLoad.forEach((img) => {
//   loadImages(img);
// });

// //load images as you scroll, on demand

// if ("IntersectionObserver" in window) {
//   const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//       if (item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//       }
//     });
//   });
//   imagesToLoad.forEach((img) => {
//     observer.observe(img);
//   });
// } else {
//   imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });
// }


//Get all the images with data-src attribute
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
  img.removeAttribute("data-src");
}

//will start loading .img file when it is 300px below the viewport)
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px",
};

//loop through the images and determine which ones need to be shown
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
