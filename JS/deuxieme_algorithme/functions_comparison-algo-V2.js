// fonction de comparaison de l'input et d'un tableau de chaines de caractères
export const comparison = (input, string) => {
  for (let letter = 0; letter < input.length; letter ++) {
    const value = input[letter];
    const title = string[letter];
    if (value !== title) {
      return false;
    }
  }
  return true;
};
