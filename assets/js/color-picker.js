document.addEventListener('DOMContentLoaded', function () {
  const bgBtn = document.getElementById('bg-color-btn');
  const bgPicker = document.getElementById('bg-color-picker');
  const textBtn = document.getElementById('text-color-btn');
  const textPicker = document.getElementById('text-color-picker');

  bgPicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--bg-color', e.target.value);
    bgBtn.style.backgroundColor = e.target.value;
  });

  textPicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--text-color', e.target.value);
    textBtn.style.backgroundColor = e.target.value;
  });
});