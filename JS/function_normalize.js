// suppression des accents, et des majuscules
export const wordNormalize = (string) => string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
