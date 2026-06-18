
  const searchBox = document.querySelector('.search-box');
  const searchIcon = document.querySelector('.search-box i');
  const searchInput = document.querySelector('.search-box input');

  searchIcon.addEventListener('click', () => {
    // Only toggle on small screens where input is hidden
    if (window.innerWidth <= 650) {
      searchBox.classList.toggle('open');
      if (searchBox.classList.contains('open')) {
        searchInput.focus();
      }
    }
  });

  // Close when user clicks outside
  document.addEventListener('click', (e) => {
    if (!searchBox.contains(e.target)) {
      searchBox.classList.remove('open');
    }
  });

  // Close when user presses Enter
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchBox.classList.remove('open');
    }
  });
