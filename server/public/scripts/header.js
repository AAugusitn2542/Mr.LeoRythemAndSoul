const header = document.querySelector('header');

header.innerHTML = `
  <div class="band-header">
    <div class="logo">
      <a href="/" class="logo">
        <span>Mr.LeoRhythmAndSoulBand</span>
      </a>
    </div>
    <nav class="menu" id="mainNav">
      <a href="/Tour">Shows</a>
      <a href="/Performance">Performance</a>
      <a href="/theCrew">The Crew</a>
      <a href="/Gallery">Gallery</a>
      <a href="/contact">Contact</a>
    </nav>
    <div class="social-icons">
      <a href="https://www.facebook.com/nnjackson42?mibextid=ZbWKwL" target="_blank">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/mrleorhythm/" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.youtube.com/channel/UCsSyHUURyLjpzasJRc2suhA" target="_blank">
        <i class="fab fa-youtube"></i>
      </a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
`;

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});

// Close menu when a nav link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
  });
});
