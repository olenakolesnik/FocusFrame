const openBtn = document.querySelector(".mobile-menu-open");
const closeBtn = document.querySelector(".mobile-menu-close");
const backdrop = document.querySelector(".backdrop");

// відкрити меню
openBtn.addEventListener("click", () => {
  backdrop.classList.remove("hidden");
});

// закрити кнопкою
closeBtn.addEventListener("click", () => {
  backdrop.classList.add("hidden");
});

// закрити по кліку на фон
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) {
    backdrop.classList.add("hidden");
  }
});
const menuLinks = document.querySelectorAll(".mobile-menu-item a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    backdrop.classList.add("hidden");
  });
});