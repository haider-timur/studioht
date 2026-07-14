document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('audio');
  const toggleBtn = document.getElementById('toggle-btn');
  const progressBar = document.querySelector('.progress-bar');
  const timeDisplay = document.getElementById('time-display');
  const progressContainer = document.querySelector('.progress-container');

  audio.volume = 0.2;

  function updateButton() {
    const iconSpan = document.getElementById('icon');
    iconSpan.innerHTML = audio.paused
      ? '<svg width="12" height="12" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="currentColor"/></svg>'
      : '<svg width="12" height="12" viewBox="0 0 24 24"><rect x="5" y="4" width="4" height="16" fill="currentColor"/><rect x="15" y="4" width="4" height="16" fill="currentColor"/></svg>';
  }

  function formatTime(sec) {
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  toggleBtn.addEventListener('click', () => {
    audio.paused ? audio.play() : audio.pause();
  });

  audio.addEventListener('loadedmetadata', () => {
    timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
  });

  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent}%`;
    timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  });

  audio.addEventListener('ended', updateButton);
  audio.addEventListener('play', updateButton);
  audio.addEventListener('pause', updateButton);

  progressContainer.addEventListener('click', (event) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percent = clickX / rect.width;
    audio.currentTime = percent * audio.duration;
  });
});