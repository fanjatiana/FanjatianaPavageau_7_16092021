export const hiddenClick = (searchblock, icon) => {
  const outsideClickL = (event) => {
    if (!searchblock.contains(event.target && icon.className.includes('rotate'))) {
      searchblock.style.display = 'none';
      icon.classList.remove('rotate');
    }
  };
  document.addEventListener('click', outsideClickL);
};
