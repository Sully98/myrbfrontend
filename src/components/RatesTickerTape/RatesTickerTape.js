import React, { useEffect } from 'react';



const RatesTickerTape = (props) => {
  let widgetRef = React.createRef();

  useEffect(() => {

    let script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = `
    {
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "Nasdaq 100"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "BTC/USD"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "ETH/USD"
        }
      ],
      "colorTheme": "dark",
      "isTransparent": true,
      "displayMode": "adaptive",
      "locale": "en"
    }`
    widgetRef.current.appendChild(script);
  },[]);

  return (
    <ul className={`custom-bg-dark--2 text-xs h-12 flex items-center justify-between`}>
      <div class="tradingview-widget-container" ref={widgetRef}>
        <div class="tradingview-widget-container__widget"></div>

      </div>
    </ul>
  )
}

export default RatesTickerTape