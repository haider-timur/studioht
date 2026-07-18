document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.project-item');
  const params = new URLSearchParams(window.location.search);
  const tag = params.get('tag');

  if (tag) {
    items.forEach(item => {
      const tags = item.dataset.tags.split(',');
      item.style.display = tags.includes(tag) ? 'block' : 'none';
    });

    const indicator = document.getElementById('filter-indicator');
    const label = document.getElementById('filter-tag-label');
    if (indicator && label) {
      label.textContent = tag;
      indicator.style.display = 'block';
    }

    const intro = document.getElementById('intro');
    if (intro) {
      intro.style.display = 'none';
    }
  }
});