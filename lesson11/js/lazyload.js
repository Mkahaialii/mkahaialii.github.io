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

 