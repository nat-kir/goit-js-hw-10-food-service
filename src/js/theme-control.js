const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const switchRef = document.querySelector("input");
const bodyRef = document.querySelector("body");
  console.log(switchRef);

  switchRef.addEventListener('change', function (event) {
if (switchRef.checked){
    bodyRef.classList.add(dark-theme);
}
  })