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

const galleryCards = document.querySelectorAll(".gallery-card");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const closeLightbox = document.getElementById("closeLightbox");
const prevBtn = document.getElementById("prevImage");
const nextBtn = document.getElementById("nextImage");

if (galleryCards.length && lightbox) {

    let currentIndex = 0;

    function openLightbox(index){

        currentIndex = index;

        const img = galleryCards[index].querySelector("img");

        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;

        const title = galleryCards[index].querySelector("h3");

        lightboxTitle.textContent = title ? title.textContent : "";

        lightbox.classList.add("show");
    }

    galleryCards.forEach((card,index)=>{

        card.addEventListener("click",()=>{

            openLightbox(index);

        });

    });

    closeLightbox.onclick=()=>{

        lightbox.classList.remove("show");

    };

    nextBtn.onclick=()=>{

        currentIndex=(currentIndex+1)%galleryCards.length;

        openLightbox(currentIndex);

    };

    prevBtn.onclick=()=>{

        currentIndex=(currentIndex-1+galleryCards.length)%galleryCards.length;

        openLightbox(currentIndex);

    };

    window.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.classList.remove("show");

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
// ===== GALLERY FILTER =====

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all" || item.dataset.category === filter) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

// ===== GALLERY SEARCH =====

const searchInput = document.getElementById("gallerySearch");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        galleryItems.forEach(item => {

            const title = item.querySelector("h3").textContent.toLowerCase();
            const category = item.dataset.category.toLowerCase();

            if (
                title.includes(value) ||
                category.includes(value)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

}
// ===== PASSWORD PROTECTION =====

const passwordInput = document.getElementById("galleryPassword");

if (passwordInput) {

    const PASSWORD = "Design@1937";
    let attempts = 0;

    function checkPassword() {

        const input = passwordInput.value;

        if (input === PASSWORD) {

            const screen = document.getElementById("password-screen");

            screen.style.opacity = "0";

            setTimeout(() => {
                screen.style.display = "none";
                document.getElementById("gallery-content").style.display = "block";
            }, 400);

        } else {

            attempts++;

            document.getElementById("error").textContent =
                `❌ Incorrect Password (${attempts}/3)`;

            passwordInput.value = "";
            passwordInput.focus();

            if (attempts >= 3) {
                document.getElementById("error").textContent = "Access Denied";
                document.querySelector(".login-box button").disabled = true;
            }
        }
    }

    window.checkPassword = checkPassword;

    passwordInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            checkPassword();
        }
    });

    passwordInput.focus();
}
