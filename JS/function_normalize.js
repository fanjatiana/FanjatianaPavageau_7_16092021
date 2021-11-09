export const stringNormalize = (inputValue) => {
  inputValue
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
   
};
