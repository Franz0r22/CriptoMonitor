import Image from "next/image";
import styles from "./page.module.css";
import { getCryptocurrencies } from "./Services/CMCService";

interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  cmc_rank: number;
  circulating_supply: number;
  quote: {
    USD: {
      price: number;
      market_cap: number;
    };
  };
}

async function Home() {
  const cryptocurrencies: Cryptocurrency[] = await getCryptocurrencies();

  const toMoneyFormat = (value: number) => {
    return value.toLocaleString('es-ES', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  return (
    <div className="flex flex-col mt-10 max-w-screen-xl mx-auto" style={{ minHeight: '100vh' }}>
      <h1 className="bg-gradient-to-r from-orange-300 to-orange-700 inline-block text-transparent bg-clip-text text-4xl font-bold mb-6">
      Criptomonedas: Precios al Instante
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cryptocurrencies.map((crypto) => (
          <div key={crypto.id} className="bg-white p-4 rounded-lg shadow-md relative">
            <h2 className="text-lg font-bold">{crypto.name} ({crypto.symbol})</h2>
            <p className="text-gray-600">Precio: {toMoneyFormat(crypto.quote.USD.price)}</p>
            <p className="text-gray-600">Capitalización de mercado: {toMoneyFormat(crypto.quote.USD.market_cap)}</p>
            <p className="text-gray-600">Suministro circulante: {Math.round(crypto.circulating_supply).toLocaleString()} {crypto.symbol}</p>
            <div className="absolute top-2 right-3">
              <p className=" border rounded-full w-6 h-6 flex items-center justify-center bg-gradient-to-r from-orange-300 to-orange-700 text-white text-sm font-bold">{crypto.cmc_rank}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
