const mintAddress = "YOUR_MINT_ADDRESS";
document.getElementById("mint").innerText = mintAddress;

const widget = document.createElement("script");
widget.src = "https://s3.tradingview.com/tv.js";
widget.onload = () => {
  new TradingView.widget({
    container_id: "tradingview_widget",
    width: "100%",
    height: 400,
    symbol: "SOLUSD",
    interval: "D",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#0b0b0f",
    enable_publishing: false,
    allow_symbol_change: true,
    hide_side_toolbar: false,
    details: true,
    hotlist: true,
    calendar: true,
  });
};
document.body.appendChild(widget);
