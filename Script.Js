// =============================
// Deepan Portfolio - Pro JS
// =============================

// ===== Smooth Scroll Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// ===== Sticky Header Effect =====
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== Text Reveal on Load (Hero Section) =====
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".hero-content h1, .hero-content h2, .hero-content p, .buttons");
  elements.forEach((el, index) => {
    setTimeout(() => el.classList.add("reveal-text"), 300 * index);
  });
});

// ===== Scroll Animation for Sections =====
const revealElements = document.querySelectorAll(".fade-in, .slide-up, .slide-left, .slide-right");
function handleScroll() {
  const trigger = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll();

// ===== Contact Form Interaction =====
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector("button");
    btn.innerHTML = "Sending...";
    btn.disabled = true;
    setTimeout(() => {
      alert("✅ Thank you, Deepan! Your message has been sent successfully!");
      form.reset();
      btn.innerHTML = "Send Message";
      btn.disabled = false;
    }, 1200);
  });
}

// ===== Parallax Background Effect =====
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (hero) hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
});

// ===== Floating Cursor Glow =====
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// ===== Click Ripple Effect =====
document.addEventListener("click", e => {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// ===== Back to Top Button =====
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.classList.add("top-btn");
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) topBtn.classList.add("show");
  else topBtn.classList.remove("show");
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
