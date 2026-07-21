// ===== DARK/LIGHT MODE =====
const toggle = document.getElementById("toggle");
if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  };
}

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href").split("#")[1];
    if (targetId) {
      e.preventDefault();
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ===== GALLERY LIGHTBOX =====

const cards = document.querySelectorAll(".gallery-card");
const lightbox = document.getElementById("lightbox");

if (cards.length && lightbox) {

    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const closeBtn = document.getElementById("closeLightbox");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const img = card.querySelector("img");
            const title = card.querySelector("h3").textContent;

            lightboxImage.src = img.getAttribute("src");
          console.log(lightboxImage.src);
            lightboxTitle.textContent = title;

            lightbox.style.display = "flex";

        });

    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

}
// ===== HERO FLOATING BLOBS =====
const heroBg = document.querySelector(".hero-bg");
if (heroBg) {
  const blobs = [];
  const colors = [
    "rgba(79,70,229,0.3)",
    "rgba(245,158,11,0.3)",
    "rgba(79,70,229,0.15)"
  ];

  for (let i = 0; i < 3; i++) {
    const blob = document.createElement("div");
    blob.className = "blob";
    blob.style.background = colors[i];
    blob.style.left = `${Math.random() * 80 + 10}%`;
    blob.style.top = `${Math.random() * 80 + 10}%`;
    blob.style.width = `${Math.random() * 250 + 100}px`;
    blob.style.height = blob.style.width;
    blob.style.animationDelay = `${Math.random() * 5}s`;
    heroBg.appendChild(blob);
    blobs.push(blob);
  }
}

// ===== CARD HOVER FLOAT =====
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
    card.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px) scale(1)";
    card.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
  });
});

// ===== BUTTON GLOW ON HOVER =====
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 20px 60px rgba(79,70,229,0.5)";
    btn.style.transform = "translateY(-3px)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "";
    btn.style.transform = "";
  });
});

// ===== OPTIONAL: FADE-UP ON SCROLL (extra JS fallback) =====
const faders = document.querySelectorAll(".fade-up");
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
