const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menu.querySelectorAll('details').forEach(group => group.open = false);
}));
document.addEventListener('click', event => {
  if (!event.target.closest('.site-nav') && !event.target.closest('.menu-toggle')) {
    menu.querySelectorAll('details').forEach(group => group.open = false);
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    menu.querySelectorAll('details').forEach(group => group.open = false);
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectTab(tabs[next]);
    tabs[next].focus();
  });
});
let toastTimer;
document.querySelectorAll('[data-placeholder]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  const toast = document.getElementById('placeholder-toast');
  toast.textContent = `${link.dataset.placeholder}: destination to be added.`;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 4200);
}));
document.querySelector('#year').textContent = new Date().getFullYear();


(() => {
  const carousel = document.querySelector('#vldb-news-carousel');
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll('.news-slide')];
  const prev = carousel.querySelector('.news-prev');
  const next = carousel.querySelector('.news-next');
  const pause = carousel.querySelector('.news-pause');
  const count = carousel.querySelector('.news-count');
  const status = carousel.querySelector('.news-status');

  let current = 0;
  let playing = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer;




    ///////

function show(index, announce = false) {
  current = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    const position = (i - current + slides.length) % slides.length;
    slide.hidden = position >= 2;
    slide.style.order = position;
  });

  const second = (current + 1) % slides.length;
  count.textContent = `${current + 1} & ${second + 1} / ${slides.length}`;

  if (announce) {
    status.textContent =
      `Showing news ${current + 1} and ${second + 1} of ${slides.length}`;
  }
}

    /////
    

  function startTimer() {
    clearInterval(timer);
    if (!playing) return;

    timer = setInterval(() => {
      // Give readers time when hovering, using a link, or viewing another tab.
      if (
        carousel.matches(':hover') ||
        carousel.contains(document.activeElement) ||
        document.hidden
      ) return;

      show(current + 1);
    }, 5000);
  }

  prev.addEventListener('click', () => show(current - 1, true));
  next.addEventListener('click', () => show(current + 1, true));

  pause.addEventListener('click', () => {
    playing = !playing;
    pause.textContent = playing ? 'Pause' : 'Play';
    startTimer();
  });

  pause.textContent = playing ? 'Pause' : 'Play';
  show(0);
  startTimer();
})();
