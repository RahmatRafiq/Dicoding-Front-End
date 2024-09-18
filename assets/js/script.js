const header = document.querySelector("header");

// Menambahkan class 'sticky' saat scroll
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle navbar saat menu icon diklik
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x"); // Ubah ikon menjadi X (menu close)
  navbar.classList.toggle("active"); // Toggle tampilan navbar
};
