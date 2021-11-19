export const hiddenClick = (hidden, icon) => {
  const outsideClickL = (event) => {
    if (!hidden.contains(event.target && icon.className.includes('rotate'))) {
      hidden.style.display = 'none';
      icon.classList.remove('rotate');
    }
  };
  document.addEventListener('click', outsideClickL);
};
