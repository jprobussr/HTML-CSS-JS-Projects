const container = document.querySelector('.container');

document.querySelector('.signup-btn').addEventListener('click', () => {
  container.classList.add('change');
});

document.querySelector('.signin-btn').addEventListener('click', () => {
    container.classList.remove('change')
})