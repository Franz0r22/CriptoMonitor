const baseUrl = "wss://streamer.cryptocompare.com/v2";
const apiKey ="ac8495e4d6c6004c2496bb58db543ead7c2c4dcc718c5ccf7bdbd34186abc7ed";

export const WebSocketService = {
  connect: (onPriceUpdate: (price: any) => void) => {
    const ws = new WebSocket(`${baseUrl}?api_key=${apiKey}`);

    ws.onopen = () => {
      console.log("WebSocket connection opened");

      const subscriptionMessage = {
        action: "SubAdd",
        subs: ["5~CCCAGG~BTC~USD", "5~CCCAGG~ETH~USD", "5~CCCAGG~BTC~USDT"],
      };

      ws.send(JSON.stringify(subscriptionMessage));
      console.log("Subscription message sent:", subscriptionMessage);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received data:", data);

      switch (data.TYPE) {
        case "5":
          if (data.PRICE) {
            onPriceUpdate({
              fromSymbol: data.FROMSYMBOL,
              toSymbol: data.TOSYMBOL,
              price: data.PRICE,
            });
          }
          break;
        case "20":
          console.log("Received welcome message");
          break;
        case "999":
          console.log("Received heartbeat");
          break;
        default:
          console.log("Received unknown message type:", data.TYPE);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return ws;
  },
};
