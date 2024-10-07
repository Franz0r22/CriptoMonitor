import React, { useEffect, useState } from "react";
import { getCryptocurrencies } from "../Services/coinMarketCapService";

interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      percent_change_24h: number;
    };
  };
}

const Home: React.FC = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>(
    []
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCryptocurrencies(10);
        setCryptocurrencies(data);
      } catch (err) {
        setError("Error al obtener los datos de criptomonedas");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cryptocurrencies</h1>
      {error && <p>{error}</p>}
      <ul>
        {cryptocurrencies.map((crypto) => (
          <li key={crypto.id}>
            {crypto.name} ({crypto.symbol}): $
            {crypto.quote.USD.price.toFixed(2)}
            <span
              style={{
                color:
                  crypto.quote.USD.percent_change_24h >= 0 ? "green" : "red",
              }}
            >
              {crypto.quote.USD.percent_change_24h.toFixed(2)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
