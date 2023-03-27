/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import InputCurrency from "./InputCurrency";

function Converter({ rateCurrencies }) {
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");

  const getRate = (value) => rateCurrencies.find((currency) => currency.cc === value)?.rate;

  const rateFrom = getRate(fromCurrency);
  const rateTo = getRate(toCurrency);

  const onChangeFromPrice = (value) => {
    setFromPrice(value);
    const price = ((rateFrom / rateTo) * value).toFixed(2);
    setToPrice(isNaN(price) ? "" : price);
  };

  const onChangeToPrice = (value) => {
    setToPrice(value);
    const price = ((rateTo / rateFrom) * value).toFixed(2);
    setFromPrice(isNaN(price) ? "" : price);
  };

  const onChangeFromCurrency = (currency) => {
    setFromCurrency(currency);
    const rateFrom = getRate(currency);
    const price = ((rateTo / rateFrom) * toPrice).toFixed(2);
    setFromPrice(isNaN(price) ? "" : price);
  };

  const onChangeToCurrency = (currency) => {
    setToCurrency(currency);
    const rateTo = getRate(currency);
    const price = ((rateFrom / rateTo) * fromPrice).toFixed(2);
    setToPrice(isNaN(price) ? "" : price);
  };

  //  useEffect(() => {
  //    onChangeFromPrice(fromPrice);
  //  }, [toCurrency]);

  //  useEffect(() => {
  //    onChangeToPrice(toPrice);
  //  }, [fromCurrency]);

  return (
    <section className="mx-auto mt-8 flex flex-col items-center justify-center gap-4 rounded-lg border border-t-sky-300 border-l-sky-300 border-b-yellow-300 border-r-yellow-300 bg-gradient-to-br from-sky-100 to-yellow-100 p-5 md:flex-row">
      <InputCurrency
        price={fromPrice}
        currency={fromCurrency}
        onChangePrice={onChangeFromPrice}
        onChangeCurrency={onChangeFromCurrency}
        rateCurrencies={rateCurrencies}
      />
      <InputCurrency
        price={toPrice}
        currency={toCurrency}
        onChangePrice={onChangeToPrice}
        onChangeCurrency={onChangeToCurrency}
        rateCurrencies={rateCurrencies}
      />
    </section>
  );
}

export default Converter;
