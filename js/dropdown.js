function toggleDropdown(dropdownId) {
  // Get all dropdown elements
  const dropdowns = document.querySelectorAll('.dropdown-content');

  // Loop through each dropdown
  dropdowns.forEach(dropdown => {
    // If the current dropdown is not the one we're trying to open, close it
    if (dropdown.id !== dropdownId && dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  });

  // Toggle the desired dropdown
  const targetDropdown = document.getElementById(dropdownId);
  targetDropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.drop-btn')) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
};