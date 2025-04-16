(function () {
  document.addEventListener('DOMContentLoaded', initDropdown);

  function initDropdown() {
    //get elements
    const dropdown_button = document.querySelector('.dropdown_button');
    const dropdown = document.querySelector('.dropdown_menu');

    if (!dropdown_button || !dropdown) {
      alert('dropdown elements not found');
      return;
    }

    //setup
    relocateDropdown();
    registerEventListeners();

    //functions
    function relocateDropdown() {
      const { top, left } = dropdown_button.getBoundingClientRect();

      dropdown.style.top = `${top + 50}px`;
      dropdown.style.left = `${left}px`;
    }

    function toggleDropdown() {
      const isVisible = dropdown.style.display === 'flex';
      dropdown.style.display = isVisible ? 'none' : 'flex';
    }

    function registerEventListeners() {
      window.addEventListener('resize', relocateDropdown);
      dropdown_button.addEventListener('click', toggleDropdown);
    }
  }
})();
