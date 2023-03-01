// Change the image URLs in this array to your own images
const imageUrls = [
  './images/jmsn_ss_1.JPG',
  './images/jmsn_ss_2.JPG',
  './images/jmsn_ss_3.JPG',
  './images/jmsn_ss_4.JPG',
  './images/jmsn_ss_5.JPG',
];

// Get the pseudo-element
const slideshow = document.querySelector('.container::after');

// Set the background image of the pseudo-element to the first image
slideshow.style.backgroundImage = `url(${imageUrls[0]})`;

// Use setInterval to change the background image at regular intervals
let index = 0;
setInterval(() => {
  index = (index + 1) % imageUrls.length;
  slideshow.style.backgroundImage = `url(${imageUrls[index]})`;
}, 10000);
