export { dropdown_process };

const dropdown_button = document.querySelector('.dropdown_button');
const dropdown = document.querySelector('.dropdown_menu');

function dropdown_process() {
  relocateDropdown();

  window.addEventListener('resize', relocateDropdown);

  dropdown_button.addEventListener('click', () => {
    if (dropdown.style.display == 'flex') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'flex';
    }
  });
}

const relocateDropdown = function relocateDropdown() {
  const dropdown_button_BoundingRect = dropdown_button.getBoundingClientRect();
  const dropdown_button_top = dropdown_button_BoundingRect.top;
  const dropdown_button_left = dropdown_button_BoundingRect.left;

  dropdown.style.top = `${dropdown_button_top + 50}px`;
  dropdown.style.left = `${dropdown_button_left}px`;
};
