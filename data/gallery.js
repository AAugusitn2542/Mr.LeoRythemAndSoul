/*
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-desc");
  const closeBtn = document.querySelector(".lightbox-close");
  const backdrop = document.querySelector(".lightbox-backdrop");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      // active state on buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // show/hide items
      items.forEach(item => {
        const category = item.dataset.category;

        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  items.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";

      lightboxTitle.textContent = item.dataset.title || "";
      lightboxDesc.textContent = item.dataset.desc || "";

      lightbox.classList.remove("hidden");
    });
  });

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightboxImg.src = "";
  }

  closeBtn.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);

  // allow ESC key to close
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });
});

*/