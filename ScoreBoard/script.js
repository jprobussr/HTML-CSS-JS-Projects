const homeScoreEl = document.getElementById('home-score');
const guestScoreEl = document.getElementById('guest-score');
const scoreboardEl = document.querySelector('.scoreboard');

let homeScore = 0;
let guestScore = 0;

const render = () => {
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
};

render();

scoreboardEl.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;

  const team = button.dataset.team;
  const points = Number(button.dataset.points);

  if (team === 'home') {
    homeScore += points;
  } else if (team === 'guest') {
    guestScore += points;
  }

  if (!team || Number.isNaN(points)) return;

  render();
});
