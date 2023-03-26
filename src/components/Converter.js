/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import InputCurrency from "./InputCurrency";

function Converter({ rateCurrencies }) {
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");

  const rateFrom = rateCurrencies.find((currency) => currency.cc === fromCurrency)?.rate;
  const rateTo = rateCurrencies.find((currency) => currency.cc === toCurrency)?.rate;

  const onChangeFromPrice = (value) => {
    setFromPrice(value);
    const price = ((value / rateTo) * rateFrom).toFixed(2);
    setToPrice(isNaN(price) ? "" : price);
  };

  const onChangeToPrice = (value) => {
    setToPrice(value);
    const price = ((value / rateFrom) * rateTo).toFixed(2);
    setFromPrice(isNaN(price) ? "" : price);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [toCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [fromCurrency]);

  return (
    <section className="mx-auto mt-8 flex flex-col items-center justify-center gap-4 rounded-lg border border-t-sky-300 border-l-sky-300 border-b-yellow-300 border-r-yellow-300 bg-gradient-to-br from-sky-100 to-yellow-100 p-5 md:flex-row">
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
  );
}

export default Converter;
