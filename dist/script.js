const progressBar = document.querySelector('.reading-progress span');

function updateProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

const copyButton = document.querySelector('[data-copy="bibtex"]');
copyButton?.addEventListener('click', async () => {
  const text = document.querySelector('#bibtex code')?.innerText ?? '';
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = 'Copied';
    window.setTimeout(() => { copyButton.textContent = 'Copy'; }, 1600);
  } catch {
    copyButton.textContent = 'Select text';
  }
});
