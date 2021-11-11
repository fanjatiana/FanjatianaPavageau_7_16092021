export const inputNormalize = (inputValue) => {
  return inputValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

