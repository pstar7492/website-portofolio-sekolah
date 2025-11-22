// Simple client-side behaviors
document.addEventListener('DOMContentLoaded', function() {
  // Set current year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for navigation links
  var navLinks = document.query