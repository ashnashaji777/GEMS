function validateForm() {
    // Get form elements
    const form = document.getElementById('contact-form');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;

    // Validate Name (Check if not empty)
    if (name.trim() === '') {
        alert('Please enter your name.');
        return false;
    }

    // Validate Email (Check if valid format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate Phone (Check if it is a valid 10-digit number)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    // Validate State (Check if a state is selected)
    if (state === '') {
        alert('Please select a state.');
        return false;
    }

    // Validate City (Check if a city is selected)
    if (city === '') {
        alert('Please select a city.');
        return false;
    }

    // If all validations pass, allow the form to submit
    return true;
}
