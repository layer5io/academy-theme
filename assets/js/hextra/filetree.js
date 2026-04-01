/**
 * Hextra filetree shortcode - folder expand/collapse toggle.
 */
document.addEventListener('DOMContentLoaded', function () {
  var folders = document.querySelectorAll('.hextra-filetree-folder');
  folders.forEach(function (folder) {
    folder.addEventListener('click', function () {
      var isOpen = folder.getAttribute('aria-expanded') === 'true';
      var newState = isOpen ? 'closed' : 'open';

      // Toggle icon visibility
      Array.from(folder.querySelectorAll('[data-state]')).forEach(function (
        el
      ) {
        el.dataset.state = newState;
      });

      // Toggle children list visibility
      var childList = folder.nextElementSibling;
      if (childList) {
        childList.dataset.state = newState;
        if (newState === 'open') {
          childList.style.display = '';
        } else {
          childList.style.display = 'none';
        }
      }

      folder.setAttribute('aria-expanded', newState === 'open');
    });
  });

  // Set initial state for closed folders
  document.querySelectorAll('.hextra-filetree-folder').forEach(function (folder) {
    if (folder.getAttribute('aria-expanded') === 'false') {
      var childList = folder.nextElementSibling;
      if (childList) {
        childList.style.display = 'none';
      }
    }
  });
});
