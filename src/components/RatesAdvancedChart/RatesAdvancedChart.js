import React, { useEffect } from 'react';

const RatesMiniChart = (props) => {
  let widgetRef = React.createRef();

  useEffect(() => {

    let script = document.createElement('script');
    let secondScript = document.createElement('script');
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    secondScript.innerHTML = `
      console.log("HDJSDA");
      new TradingView.widget(
        {
        "autosize":true,
        "symbol": "KRAKEN:ETHUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#0C031D",
        isTransparent : true,
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_89121"
      }
    );`

    widgetRef.current.appendChild(script);

    script.addEventListener('load',(e) => {
      widgetRef.current.appendChild(secondScript);
    })

  });

  return (
    <div class="tradingview-widget-container" ref={widgetRef}>
      <div id="tradingview_89121"></div>
    </div>

  )
}

export default RatesMiniChart;