// Simple front-end form handler for Contact page
const contactForm = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      statusEl.textContent = 'Please fill in all fields.';
      return;
    }

    statusEl.textContent =
      'Thanks, ' + name + '! This form currently works only on the front-end.';
    contactForm.reset();
  });
}

//I am a little unsure about this part 
