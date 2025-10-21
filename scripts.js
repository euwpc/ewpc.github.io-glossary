// Example script: header shrink on scroll
let lastScroll = 0;
const headerEl = document.getElementById('header');

window.addEventListener('scroll', () => {
  const current = window.pageYOffset || document.documentElement.scrollTop;
  if (current > lastScroll && current > 100) {
    headerEl.style.padding = '8px 20px';
    headerEl.style.fontSize = '1.5em';
  } else {
    headerEl.style.padding = '20px';
    headerEl.style.fontSize = '2em';
  }
  lastScroll = current <= 0 ? 0 : current;
});
