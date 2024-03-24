const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "block";
      } else {
        mobileMenu.style.display = "none";
      }
  });
  