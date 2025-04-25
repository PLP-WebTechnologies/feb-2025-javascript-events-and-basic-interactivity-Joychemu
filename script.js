// Color changing button
document.getElementById('colorChanger').addEventListener('click', function () {
  this.style.backgroundColor = '#28a745';
  this.textContent = 'Color Changed!';
});

// Hover effects
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', function () {
  this.style.backgroundColor = '#FFD700';
});
hoverBox.addEventListener('mouseleave', function () {
  this.style.backgroundColor = '#eee';
});

// Keypress detection
document.getElementById('keypressInput').addEventListener('keyup', function (e) {
  document.getElementById('keypressOutput').textContent = `You typed: ${e.target.value}`;
});

// Secret double-click / long press action
let secretTimer;
const secretBtn = document.getElementById('secretBtn');

secretBtn.addEventListener('dblclick', () => {
  document.getElementById('secretMsg').textContent = '🎉 Double Click Unlocked Secret!';
});

secretBtn.addEventListener('mousedown', () => {
  secretTimer = setTimeout(() => {
    document.getElementById('secretMsg').textContent = '🔓 Long Press Unlocked Secret!';
  }, 1000);
});

secretBtn.addEventListener('mouseup', () => {
  clearTimeout(secretTimer);
});

// Gallery image switcher
let imgIndex = 0;
const images = [
  'https://via.placeholder.com/200?text=Image+1',
  'https://via.placeholder.com/200?text=Image+2',
  'https://via.placeholder.com/200?text=Image+3'
];

function changeImage() {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById('galleryImage').src = images[imgIndex];
}

// Tab display logic
function showTab(num) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById(`tab${num}`).classList.add('active');
}

// Form validation
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('input', () => {
  const feedback = document.getElementById('emailFeedback');
  if (!emailInput.validity.valid) {
    feedback.textContent = 'Please enter a valid email.';
    feedback.classList.remove('valid');
  } else {
    feedback.textContent = '✅ Looks good!';
    feedback.classList.add('valid');
  }
});

passwordInput.addEventListener('input', () => {
  const feedback = document.getElementById('passwordFeedback');
  if (passwordInput.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
    feedback.classList.remove('valid');
  } else {
    feedback.textContent = '✅ Strong password!';
    feedback.classList.add('valid');
  }
});

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Form submitted successfully!');
});
