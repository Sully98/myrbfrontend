import React, { useEffect } from 'react';

const RatesCryptoTable = (props) => {
  let widgetRef = React.createRef();

  useEffect(() => {

    let script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = `
      {
        "width": "95%",
        "height": 490,
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "BTC",
        "colorTheme": "light",
        "locale": "en"
      }`
    widgetRef.current.appendChild(script);
  },[]);

  return (
    <div class="tradingview-widget-container mx-auto mb-8" ref={widgetRef}>
      <div class="tradingview-widget-container__widget"></div>
    </div>
  )
}

export default RatesCryptoTable;