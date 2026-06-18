document.documentElement.style.opacity = '0';

window.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.transition = 'opacity 0.35s ease';
  document.documentElement.style.opacity = '1';
});

document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (
    !link ||
    !link.href ||
    link.target === '_blank' ||
    link.href.startsWith('mailto:') ||
    link.href.startsWith('tel:') ||
    link.hostname !== window.location.hostname ||
    e.metaKey || e.ctrlKey
  ) return;

  e.preventDefault();
  const dest = link.href;
  document.documentElement.style.opacity = '0';
  setTimeout(() => { window.location.href = dest; }, 320);
});
