/**
 * Hextra tabs shortcode - Bootstrap 5 compatible tab switching with sync support.
 * Works alongside Bootstrap's native tab JS via data-bs-toggle="tab".
 * Adds cross-page tab sync via localStorage.
 */
(function () {
  // Sync tabs with the same group across the page
  function syncTabs(triggerTab) {
    var container = triggerTab.closest('[data-hextra-tab-group]');
    if (!container) return;

    var tabGroupValue = container.dataset.hextraTabGroup;
    if (!tabGroupValue) return;

    var index = Array.from(
      container.querySelectorAll('[data-bs-toggle="tab"]')
    ).indexOf(triggerTab);

    var key = encodeURIComponent(tabGroupValue);
    localStorage.setItem('hextra-tab-' + key, index.toString());

    // Sync all tab groups with the same group name
    document
      .querySelectorAll('[data-hextra-tab-group="' + tabGroupValue + '"]')
      .forEach(function (grp) {
        if (grp === container) return;
        var tabs = grp.querySelectorAll('[data-bs-toggle="tab"]');
        if (tabs[index]) {
          var tab = new bootstrap.Tab(tabs[index]);
          tab.show();
        }
      });
  }

  // Restore synced tab state from localStorage on page load
  document
    .querySelectorAll('[data-hextra-tab-group]')
    .forEach(function (group) {
      var key = encodeURIComponent(group.dataset.hextraTabGroup);
      var saved = localStorage.getItem('hextra-tab-' + key);
      if (saved !== null) {
        var tabs = group.querySelectorAll('[data-bs-toggle="tab"]');
        var index = parseInt(saved, 10);
        if (tabs[index]) {
          var tab = new bootstrap.Tab(tabs[index]);
          tab.show();
        }
      }
    });

  // Listen for Bootstrap tab show events to trigger sync
  document.querySelectorAll('[data-bs-toggle="tab"]').forEach(function (el) {
    el.addEventListener('shown.bs.tab', function () {
      syncTabs(el);
    });
  });
})();
