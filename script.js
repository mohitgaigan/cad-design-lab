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
const items = document.querySelectorAll(".gallery-item");
if (items.length) {
  let index = 0;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <span class="close-btn">×</span>
    <span class="nav-btn left">‹</span>
    <span class="nav-btn right">›</span>
    <div class="lightbox-content"></div>
  `;
  document.body.appendChild(lightbox);

  const content = lightbox.querySelector(".lightbox-content");

  const showItem = i => {
    const el = items[i].cloneNode(true);
    content.innerHTML = "";
    content.appendChild(el);
    lightbox.classList.add("show");
    index = i;
  };

  items.forEach((item, i) => {
    item.onclick = () => showItem(i);
  });

  lightbox.querySelector(".close-btn").onclick = () =>
    lightbox.classList.remove("show");

  lightbox.querySelector(".left").onclick = () =>
    showItem((index - 1 + items.length) % items.length);

  lightbox.querySelector(".right").onclick = () =>
    showItem((index + 1) % items.length);

  document.addEventListener("keydown", e => {
    if (!lightbox.classList.contains("show")) return;
    if (e.key === "Escape") lightbox.classList.remove("show");
    if (e.key === "ArrowRight") showItem((index + 1) % items.length);
    if (e.key === "ArrowLeft") showItem((index - 1 + items.length) % items.length);
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
/* =====================================================
PRODUCT GALLERY DATABASE
===================================================== */

const galleryItems = [

/* =========================
OFFICE FURNITURE
========================= */

{
title:"Staff Workstation",
category:"office",
image:"images/gallery/STAFF WORKSTATION IMAGE.JPG"
},

{
title:"Executive Workstation",
category:"office",
image:"images/gallery/EXECUTIVE WORKSTATION.JPG"
},

{
title:"Office Workstation",
category:"office",
image:"images/gallery/WORKSTATION.jpg"
},

{
title:"Conference Table",
category:"tables",
image:"images/gallery/CONFERENCE TABLE X.png"
},

{
title:"Reception Counter",
category:"office",
image:"images/gallery/RECEPTION.jpg"
},

{
title:"Reception Table",
category:"office",
image:"images/gallery/RECEPTION TABLE.jpg"
},

{
title:"Office Floor",
category:"office",
image:"images/gallery/OFFICE FLOOR.jpg"
},

{
title:"Student Desk",
category:"office",
image:"images/gallery/STUDENT DESK.jpg"
},

{
title:"Writing Pad Chair",
category:"office",
image:"images/gallery/WRITING PAD CHAIR.jpg"
},

{
title:"Center Table",
category:"tables",
image:"images/gallery/CENTER TABLE.jpg"
},

{
title:"Wooden Table",
category:"tables",
image:"images/gallery/WOODEN TABLE.jpg"
},

/* =========================
LABORATORY
========================= */

{
title:"Laboratory Reception",
category:"laboratory",
image:"images/gallery/LAB RECEPTION.png"
},

{
title:"Laboratory Lobby",
category:"laboratory",
image:"images/gallery/LAB LOBBY.png"
},

{
title:"Laboratory Layout",
category:"laboratory",
image:"images/gallery/LAB LAYOUT.png"
},

{
title:"Laboratory Cluster",
category:"laboratory",
image:"images/gallery/LAB CLUSTER.png"
},

{
title:"Chemical Storage",
category:"laboratory",
image:"images/gallery/CHEMICAL STORAGE.png"
},

{
title:"Laboratory Unit",
category:"laboratory",
image:"images/gallery/LAB UNIT.png"
},

/* =========================
STORAGE
========================= */

{
title:"Sliding Storage",
category:"storage",
image:"images/gallery/SLIDING STORAGE.jpg"
},

{
title:"Metal Storage",
category:"storage",
image:"images/gallery/METAL STORAGE.jpg"
},

{
title:"Wooden Locker",
category:"storage",
image:"images/gallery/WOODEN LOCKER.jpg"
},

{
title:"Mobile Locker",
category:"storage",
image:"images/gallery/MOBILE LOCKER.jpg"
},

{
title:"Magazine Rack",
category:"storage",
image:"images/gallery/MAGAZINE RACK.jpg"
},

{
title:"Shoe Rack",
category:"storage",
image:"images/gallery/SHOE RACK.jpg"
},

{
title:"Steel Almirah",
category:"storage",
image:"images/gallery/STEEL ALMIRAH.jpg"
},

/* =========================
BEDS
========================= */

{
title:"Metal Bed",
category:"beds",
image:"images/gallery/METAL BED 5.png"
},

{
title:"Folding Bed",
category:"beds",
image:"images/gallery/FOLDING BED.png"
},

{
title:"Bunk Bed",
category:"beds",
image:"images/gallery/BUNK BED.jpg"
},

/* =========================
INDUSTRIAL
========================= */

{
title:"Powder Coating Plant",
category:"industrial",
image:"images/gallery/POWDER COATING PLANT.jpg"
},

{
title:"Powder Coating Trolley",
category:"industrial",
image:"images/gallery/POWDER COATING TROLLEY.jpg"
},

{
title:"Industrial Product",
category:"industrial",
image:"images/gallery/AGI.jpg"
},

{
title:"Industrial Product",
category:"industrial",
image:"images/gallery/BU.jpg"
},

{
title:"Industrial Product",
category:"industrial",
image:"images/gallery/CF.jpg"
},

/* =========================
LAYOUTS
========================= */

{
title:"Room Layout",
category:"layouts",
image:"images/gallery/ROOM LAYOUT.png"
},

{
title:"Room 405",
category:"layouts",
image:"images/gallery/ROOM 405.png"
},

{
title:"Room 407",
category:"layouts",
image:"images/gallery/ROOM 407.png"
}

];
