const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
// Scroll reveal
const items = document.querySelectorAll(".fade-up");
const reveal = () => {
  items.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) el.classList.add("show");
  });
};
window.addEventListener("scroll", reveal);
reveal();
// Gallery lightbox
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);

const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("show");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});
