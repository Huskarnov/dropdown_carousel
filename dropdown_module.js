(function () {
  document.addEventListener('DOMContentLoaded', initDorpdown);

  function initDorpdown() {
    //get elements
    const dropdown_button = document.querySelector('.dropdown_button');
    const dropdown_menu = document.querySelector('.dropdown_menu');

    //early return pattent
    if (!dropdown_button || !dropdown_menu) {
      console.error('dropdown element not found');
      return;
    }

    // functions;
    function dropdownPosition() {
      const { top, left } = dropdown_button.getBoundingClientRect();
      dropdown_menu.style.top = `${top + 50}px`;
      dropdown_menu.style.left = `${left}px`;
    }

    function dropdownToggle() {
      dropdownPosition();
      const isVisible = dropdown_menu.style.display === 'flex';
      dropdown_menu.style.display = isVisible ? 'none' : 'flex';
    }

    function allocateEventListeners() {
      dropdown_button.addEventListener('click', dropdownToggle);
      window.addEventListener('resize', dropdownPosition);
    }

    //setup
    dropdownPosition();
    allocateEventListeners();
  }
})();
