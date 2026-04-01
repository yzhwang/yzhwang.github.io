(function() {
  var toggle = document.getElementById('theme-toggle');
  var root = document.documentElement;

  function getPreferred() {
    var stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: theme } }));
  }

  apply(getPreferred());

  if (toggle) {
    toggle.addEventListener('click', function() {
      var current = root.getAttribute('data-theme');
      apply(current === 'dark' ? 'light' : 'dark');
    });
  }
})();
