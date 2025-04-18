let current = 1,
  playPauseBool = true,
  interval;

const changeSlides = () => {
  const slideList = document.querySelectorAll('.slide');

  const slides = Array.from(slideList);

  if (current > slides.length) {
    current = 1;
  } else if (current === 0) {
    current = slides.length;
  }

  slides.forEach((slide) => {
    if (slide.classList[1].split('-')[1] * 1 === current) {
      slide.style.cssText = 'visibility: visible; opacity: 1;';
    } else {
      slide.style.cssText = 'visibility: hidden; opacity: 0;';
    }
  });
};

const playPause = () => {
  if (playPauseBool) {
    interval = setInterval(() => {
      current++;
      changeSlides();
    }, 3000);

    playPauseBool = false;
  } else {
    clearInterval(interval);
    playPauseBool = true;
  }
  changePlayPause();
  arrowsVisibility();
};

const changePlayPause = () => {
  const icon = document.querySelector('.play-pause i');

  const cls = icon.classList[1];

  if (cls === 'fa-play') {
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
};

const arrowsVisibility = () => {
  const arrows = document.querySelectorAll('.control');

  Array.from(arrows).forEach((arrow) => {
    if (!playPauseBool) {
      arrow.classList.add('arrows-visibility');
    } else {
      arrow.classList.remove('arrows-visibility');
    }
  });
};

document.querySelector('.play-pause').addEventListener('click', () => {
  playPause();
});

document.querySelector('.left-arrow').addEventListener('click', () => {
  if (!playPauseBool) {
    clearInterval(interval); // stop the interval
    playPauseBool = true; // update flag
    changePlayPause(); // update play/pause icon
    arrowsVisibility(); // update arrows visibility
  }

  current--;
  changeSlides();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
  if (!playPauseBool) {
    clearInterval(interval);
    playPauseBool = true;
    changePlayPause();
    arrowsVisibility();
  }

  current++;
  changeSlides();
});

changeSlides();
playPause();
