// Selectors for DOM elements
const sliderContainer = document.getElementById("slider_container");
const nextImageButton = document.getElementById("button_next_uasdhuas");
const previousButton = document.getElementById("btn_previous_uas");

// Image paths for the slider
const imagePaths = [
  "./images/slider/1.png",
  "./images/slider/2.png",
  "./images/slider/3.png",
  "./images/slider/4.png",
  "./images/slider/5.png",
  "./images/slider/6.png",
];

// Index to keep track of the current image
let currentIndex = 0;

// Function to create an image element with the given source and classes
const createImageElement = (src) => {
  const image = document.createElement("img");
  image.src = src;
  image.classList.add(..."w-[50%] px-1 rounded-3xl".split(" "));
  return image;
};

// Function to populate the slider with images
const populateSliderWithImages = () => {
  const numberOfDuplicates = 3; // Duplicate each image 3 times
  for (let i = 0; i < imagePaths.length * numberOfDuplicates; i++) {
    const imageElement = createImageElement(imagePaths[i % imagePaths.length]);
    sliderContainer.appendChild(imageElement);
  }
};

// Function to update the slider's position
const updateSliderPosition = () => {
  const imageWidth = sliderContainer.children[0].offsetWidth;
  const offset = -currentIndex * imageWidth;
  sliderContainer.style.transform = `translateX(${offset}px)`;
};

// Function to handle the transition end and reset the slider if necessary
const handleTransitionEnd = () => {
  const resetIndex = imagePaths.length;
  if (currentIndex === resetIndex * 2 || currentIndex === -1) {
    sliderContainer.style.transition = "none";
    currentIndex = resetIndex;
    updateSliderPosition();
    // Re-enable the transition after resetting
    setTimeout(() => {
      sliderContainer.style.transition = "transform 0.5s ease";
    }, 0);
  }
};

// Event listeners for next and previous buttons
nextImageButton.addEventListener("click", () => {
  currentIndex++;
  handleTransitionEnd();
  updateSliderPosition();
});

previousButton.addEventListener("click", () => {
  currentIndex--;
  handleTransitionEnd();
  updateSliderPosition();
});

// Event listener to populate the slider once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateSliderWithImages);

// Event listener to update the slider position when the window is resized
window.addEventListener("resize", updateSliderPosition);

// Touch event handlers for the slider
let touchStartX = 0;
let touchDistance = 0;

sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener("touchmove", (e) => {
  touchDistance = touchStartX - e.touches[0].clientX;
});

sliderContainer.addEventListener("touchend", () => {
  const swipeThreshold = 50;
  if (touchDistance > swipeThreshold) {
    nextImageButton.click();
  } else if (touchDistance < -swipeThreshold) {
    previousButton.click();
  }
  touchDistance = 0;
});
