"use client";
import { useEffect, useState } from "react";
import { WebSocketService } from "../Services/WebSocketService";

interface CryptoPrice {
  BTC_USD: number | null;
  ETH_USD: number | null;
  BTC_USDT: number | null;
}

export default function Live() {
  const [isConnected, setIsConnected] = useState(false);
  const [prices, setPrices] = useState<CryptoPrice>({
    BTC_USD: null,
    ETH_USD: null,
    BTC_USDT: null,
  });

  useEffect(() => {
    const ws = WebSocketService.connect((priceUpdate) => {
      setPrices((prevPrices) => ({
        ...prevPrices,
        [`${priceUpdate.fromSymbol}_${priceUpdate.toSymbol}`]: priceUpdate.price,
      }));
    });

    setIsConnected(true);

    return () => {
      ws.close();
      setIsConnected(false);
    };
  }, []);

  return (
    <div className="flex flex-col mt-10 max-w-screen-xl mx-auto text-white" style={{ minHeight: '100vh' }}>
      <h1 className="bg-gradient-to-r from-teal-400 to-green-900 bg-clip-text text-transparent inline-block text-4xl font-bold mb-10">
        Criptomonedas: Precios al Instante
      </h1>
      <p>Estado de conexión: {isConnected ? "Conectado" : "Desconectado"}</p>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-3">Precios actuales:</h2>
        <ul>
          <li>BTC/USD: {prices.BTC_USD ? `$${prices.BTC_USD.toFixed(2)}` : 'Cargando...'}</li>
          <li>ETH/USD: {prices.ETH_USD ? `$${prices.ETH_USD.toFixed(2)}` : 'Cargando...'}</li>
          <li>BTC/USDT: {prices.BTC_USDT ? `$${prices.BTC_USDT.toFixed(2)}` : 'Cargando...'}</li>
        </ul>
      </div>
    </div>
  );
}
