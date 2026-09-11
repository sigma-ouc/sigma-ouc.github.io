(() => {
  const init = () => {
    document.querySelectorAll('.sigma-projects-table .project-read-more').forEach((button) => {
      const description = button.previousElementSibling;
      if (!description || description.classList.contains('project-meta')) return;
      description.classList.add('project-description');
      button.addEventListener('click', () => {
        const expanded = description.classList.toggle('is-expanded');
        button.textContent = expanded ? 'Show Less' : 'Read More';
        button.setAttribute('aria-expanded', String(expanded));
      });
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
