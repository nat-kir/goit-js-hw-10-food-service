const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const currentTheme = localStorage.getItem('Theme');
const bodyRef = document.querySelector('body');
const switchBoxRef = document.querySelector('#theme-switch-control');

if (currentTheme === Theme.DARK) {
  switchBoxRef.checked = true;
  bodyRef.classList.add(Theme.DARK);
}

switchBoxRef.addEventListener('change', function (event) {
  if (event.target.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    switchBoxRef.classList.add('.switch__input:checked')
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    switchBoxRef.classList.remove('.switch__input:checked')
    localStorage.setItem('Theme', Theme.LIGHT);
  }
});