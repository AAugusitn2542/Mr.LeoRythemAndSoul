// Select the header element
let header = document.querySelector('header');

// Populate the header dynamically
header.innerHTML = `
  <div class="band-header">
    <div class="logo">
      <a href="/" class="logo">
        <span>MrLeoRythmAndSoulBand</span>
      </a>
    </div>
    <nav class="menu">
      <a href="/Tour">Shows</a>
      <a href="/Performance">Performance</a>
      <a href="/theCrew">The Crew</a> 
      <a href="/Gallery">Gallery</a>
      <a href="/contact">Contact</a>
    </nav>
    <div class="social-icons">
      <a href="https://facebook.com" target="_blank">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://instagram.com" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.youtube.com/channel/UCsSyHUURyLjpzasJRc2suhA" target="_blank">
        <i class="fab fa-youtube"></i>
      </a>
    </div>
  </div>
`;