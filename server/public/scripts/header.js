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
      
      <a href="/Contact.html">Contact</a>
    </nav>
    <div class="social-icons">
      <a href="https://facebook.com" target="_blank">
        <img src="/images/facebook-logo.png" alt="Facebook">
      </a>
      <a href="https://instagram.com" target="_blank">
        <img src="/images/instagram.png" alt="Instagram">
      </a>
      <a href="https://youtube.com" target="_blank">
        <img src="/images/youtube1.png" alt="YouTube">
      </a>
    </div>
  </div>
`;


