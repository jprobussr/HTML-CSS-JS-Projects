const container = document.querySelector('.container');
const headingSpan2 = document.querySelector('.heading-span-2');

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
