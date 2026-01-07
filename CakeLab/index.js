const egg = document.querySelector('.mood');
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');
const body = document.body;

if (savedTheme) {
  document.body.dataset.theme = savedTheme;
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
})

egg.addEventListener('click', () => {
  const currentMood = egg.dataset.mood;

  if (currentMood === 'shy') {
    egg.dataset.mood = 'hyped';
  } else {
    egg.dataset.mood = 'shy';
  }
});
