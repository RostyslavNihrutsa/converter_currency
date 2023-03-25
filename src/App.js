/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "./components/Layout";
import Converter from "./components/Converter";
import useFetch from "./hooks/useFetch";
import formatRates from "./lib/formatRates";

function App() {
  const { data, isLoading } = useFetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");

  const rateCurrencies = data ? formatRates(data) : [];

  return (
    <Layout rateCurrencies={rateCurrencies} isLoading={isLoading}>
      <Converter rateCurrencies={rateCurrencies} />
    </Layout>
  );
}

export default App;
