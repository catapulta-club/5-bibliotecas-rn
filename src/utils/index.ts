export const formatToBr = (value: number) => {
  const formato = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  };
  return new Intl.NumberFormat('pt-BR', formato).format(value);
};
