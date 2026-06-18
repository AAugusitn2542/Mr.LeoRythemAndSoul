const footer = document.querySelector('footer');

footer.innerHTML = `
  <div class="site-footer">
    <div class="footer-inner">

      <!-- Brand -->
      <div class="footer-brand">
        <a href="/" class="footer-logo">Mr. Leo Rhythm & Soul Band</a>
        <p class="footer-tagline">Bringing soul, R&B, and funk to every stage. Live and unforgettable.</p>
        <div class="footer-socials">
          <a href="https://www.instagram.com/mrleorhythm/" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/nnjackson42?mibextid=ZbWKwL" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://youtube.com/@mrleorhythmsoulband4484" target="_blank" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Tour">Shows</a></li>
          <li><a href="/Performance">Performances</a></li>
          <li><a href="/Gallery">Gallery</a></li>
          <li><a href="/theCrew">The Crew</a></li>
          <li><a href="/contact">Book Us</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><i class="fas fa-envelope"></i> <a href="mailto:nichellejackson145@gmail.com">nichellejackson145@gmail.com</a></li>
          <li><i class="fas fa-phone"></i> <a href="tel:+16506609553">(650) 660-9553</a></li>
          <li><i class="fas fa-map-marker-alt"></i> Bay Area, CA</li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Mr. Leo Rhythm & Soul Band. All rights reserved.</p>
    </div>
  </div>
`;
