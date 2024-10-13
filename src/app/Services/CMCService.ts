const API_KEY = "b33c9c80-8d2f-4dd3-8c30-31a336933101";
const BASE_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency";

export const getCryptocurrencies = async (limit: number = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/listings/latest?limit=${limit}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-CMC_PRO_API_KEY": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    throw error; 
  }
};
