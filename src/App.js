/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import InputCurrency from "./components/InputCurrency";

function App() {
  const [rateCurrencies, setRateCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");

  const symbolsCurrency = {
    UAH: "₴",
    USD: "$",
    EUR: "€",
  };

  const formatRates = (arr) => {
    const UAH = {
      txt: "Гривня",
      rate: 1,
      cc: "UAH",
      exchangedate: "09.03.2023",
      symbol: "₴",
    };

    const result = arr.reduce((acc, { txt, rate, cc, exchangedate }) => {
      if (Object.keys(symbolsCurrency).includes(cc)) {
        acc.push({ txt, rate, cc, exchangedate, symbol: symbolsCurrency[cc] });
      }
      return acc;
    }, []);
    return [UAH, ...result];
  };

  const onChangeFromPrice = (value) => {
    value = value.replaceAll(",", ".");
    setFromPrice(value);
    const rateFrom = rateCurrencies.find((currency) => currency.cc === fromCurrency)?.rate;
    const rateTo = rateCurrencies.find((currency) => currency.cc === toCurrency)?.rate;
    const price = ((value / rateTo) * rateFrom).toFixed(2);
    setToPrice(isNaN(price) ? "" : price);
  };

  const onChangeToPrice = (value) => {
    value = value.replaceAll(",", ".");
    setToPrice(value);
    const rateFrom = rateCurrencies.find((currency) => currency.cc === fromCurrency)?.rate;
    const rateTo = rateCurrencies.find((currency) => currency.cc === toCurrency)?.rate;
    const price = ((value / rateFrom) * rateTo).toFixed(2);
    setFromPrice(isNaN(price) ? "" : price);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [toCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [fromCurrency]);

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => response.json())
      .then((data) => setRateCurrencies(formatRates(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <Header rateCurrencies={rateCurrencies} />
      <main>
        <section className="mx-auto mt-8 flex w-max flex-col items-center justify-center gap-4 rounded-lg border border-t-sky-300 border-l-sky-300 border-b-yellow-300 border-r-yellow-300 bg-gradient-to-br from-sky-100 to-yellow-100 p-5 md:flex-row">
          <InputCurrency
            price={fromPrice}
            currency={fromCurrency}
            onChangePrice={onChangeFromPrice}
            onChangeCurrency={setFromCurrency}
            rateCurrencies={rateCurrencies}
          />
          <InputCurrency
            price={toPrice}
            currency={toCurrency}
            onChangePrice={onChangeToPrice}
            onChangeCurrency={setToCurrency}
            rateCurrencies={rateCurrencies}
          />
        </section>
      </main>
    </Layout>
  );
}

export default App;
