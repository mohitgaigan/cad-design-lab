// Dark mode
const toggle = document.getElementById("toggle");
if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
      document.body.classList.contains("dark") ? "dark" : "light");
  };
}
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// ===== Gallery Lightbox =====
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

