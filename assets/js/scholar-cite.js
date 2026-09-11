// Convert Publications' Google Scholar search links into BibTeX export links.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.sigma-publications a').forEach(function (link) {
    if (!/cite/i.test(link.textContent || '') || !link.href.includes('scholar.google.com')) return;

    try {
      const source = new URL(link.href);
      const query = source.searchParams.get('q');
      if (!query) return;

      const bibtex = new URL('https://scholar.google.com/scholar');
      bibtex.searchParams.set('output', 'cite');
      bibtex.searchParams.set('hl', 'en');
      bibtex.searchParams.set('q', query);
      link.href = bibtex.toString();
      link.target = '_blank';
      link.rel = 'noopener';
    } catch (error) {
      // Leave malformed or placeholder links untouched.
    }
  });
});
