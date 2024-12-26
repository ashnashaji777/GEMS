// Array of background images
const backgrounds = [
    'assets/icons/img1.jpg', 
    'assets/icons/img2.jpg', 
    'assets/icons/img3.jpg'
  ];
  
  let currentBackgroundIndex = 0;
  const backgroundSection = document.querySelector('.dynamic-background');
  
  // Set the initial background image immediately
  backgroundSection.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
  
  // Change the background image every 5 seconds
  setInterval(() => {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    backgroundSection.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
  }, 5000);
  
  
  // Form validation (basic example)
  const form = document.getElementById('registration-form');
  form.addEventListener('submit', (event) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    
    if (!name || !email || !phone) {
      alert('Please fill in all fields!');
      event.preventDefault();
    } else if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number!');
      event.preventDefault();
    }
  });
  
  function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
  }
  
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }
  




//review



const reviews = document.querySelectorAll('.review-box');
const dots = document.querySelectorAll('.dot');

function changeReview(index) {
  reviews.forEach((review, i) => {
    review.classList.remove('active');
    if (i === index * 2 || i === index * 2 + 1) {
      review.classList.add('active');
    }
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Initialize the first set of reviews
changeReview(0);

//slides

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Initialize the first slide
slides[currentSlide].classList.add('active');

// Change slides every 5 seconds
setInterval(showNextSlide, 5000);
