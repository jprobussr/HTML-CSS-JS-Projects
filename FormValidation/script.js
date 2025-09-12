const container = document.querySelector('.container');
const headingSpan2 = document.querySelector('.heading-span-2');
const form = document.querySelector('.form');

document.querySelector('.signup-btn').addEventListener('click', () => {
  container.classList.add('change');
  setTimeout(() => {
    headingSpan2.textContent = 'Up';
  }, 200);
});

document.querySelector('.signin-btn').addEventListener('click', () => {
  container.classList.remove('change');
  setTimeout(() => {
    headingSpan2.textContent = 'In';
  }, 200);
});

const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const error = (input, message) => {
  const inputWrapper = input.parentElement;
  inputWrapper.className = 'form-input-wrapper error';
  inputWrapper.querySelector('.message').textContent = message;
};

const checkRequiredFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      if (input.id === 'password2') {
        error(input, 'Password confirmation is required');
      } else {
        error(input, `${input.id} is required`);
      }
    } else {
    }
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequiredFields([userName, email, password, password2]);
});
