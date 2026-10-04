// Header buttons
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelector('.nav-links');
  const navContainer = document.querySelector('.nav-container');

  if (navContainer && navLinks) {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'nav-toggle';
    toggleBtn.type = 'button';
    toggleBtn.setAttribute('aria-label', 'Menu');
    toggleBtn.innerHTML = '\u2630';
    toggleBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navContainer.prepend(toggleBtn);
  }

  const themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', function () {
      const isDark = document.documentElement.dataset.theme !== 'dark';
      document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
      themeButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  }
});
