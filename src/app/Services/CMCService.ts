const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pro-api.coinmarketcap.com/v1';
const apiKey = process.env.CMC_API_KEY;

export const getCryptocurrencies = async (limit: number = 12) => {

  try {
    const response = await fetch(`${baseUrl}/cryptocurrency/listings/latest?limit=${limit}`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "X-CMC_PRO_API_KEY": apiKey ?? "",
      }),
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
