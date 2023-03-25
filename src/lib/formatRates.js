const symbolsCurrency = {
  USD: "$",
  EUR: "€",
  //   GBP: "£",
  //   JPY: "¥",
};

const UAH = {
  txt: "Гривня",
  rate: 1,
  cc: "UAH",
  symbol: "₴",
};

const formatRates = (arr) => {
  const result = arr.reduce((acc, { txt, rate, cc }) => {
    if (Object.keys(symbolsCurrency).includes(cc)) {
      acc.push({ txt, rate, cc, symbol: symbolsCurrency[cc] });
    }
    return acc;
  }, []);

  return [UAH, ...result];
};

export default formatRates;
