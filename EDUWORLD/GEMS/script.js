// Array of background images
const backgrounds = [
    'assets/images/w1.jpg', 
    'assets/images/w3.jpg', 
    'assets/images/w5.jpg',
    'assets/images/w4.jpeg',
    'assets/images/w2.jpg',
    

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



let currentReviewIndex = 0;
const reviewsPerPage = 2; // Number of reviews to show at a time
const reviews = document.querySelectorAll('.review-box');
const dots = document.querySelectorAll('.dot');

function showReviews() {
  // Hide all reviews first
  reviews.forEach(review => {
    review.classList.remove('active');
  });

  // Calculate the indices for the current pair of reviews
  const startIndex = currentReviewIndex;
  const endIndex = startIndex + reviewsPerPage;

  // Show the reviews for the current page
  for (let i = startIndex; i < endIndex && i < reviews.length; i++) {
    reviews[i].classList.add('active');
  }

  // Update the active dot
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  if (currentReviewIndex < dots.length) {
    dots[currentReviewIndex].classList.add('active');
  }
}

function changeReview(index) {
  currentReviewIndex = index;
  showReviews();
}

// Initially show the first set of reviews
showReviews();


//faq
document.addEventListener('DOMContentLoaded', function() {
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const faqBox = this.closest('.faq-box');
      const answer = faqBox.querySelector('.faq-answer');

      // Toggle the display of the answer
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }

      // Toggle the arrow rotation
      this.classList.toggle('rotate');
    });
  });
});
