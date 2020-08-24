import React from 'react';
import { Link } from 'react-router-dom';
import PerformanceTable from '../PerformanceTable/PerformanceTable';
import RatesMiniChart from '../RatesMiniChart/RatesMiniChart';
import RatesAdvancedChart from '../RatesAdvancedChart/RatesAdvancedChart';

const LiveTrader = (props) => {
  return (
    <div className={`custom-bg-dark--3 px-20 py-12 text-white`}>
      <p className="mb-4 ml-8 text-13">Bot activities</p>
      <div className="w-full flex justify-between items-center mb-6 mr-10">
        <h3 className="h3"> <Link to="/dashboard">&larr;</Link> <span>Live Trader</span></h3>
      </div>
      <div>
        <div className="overflow-x-auto mx-auto my-8 flex -mx-20 custom-bg-dark--4">
          <RatesMiniChart pairSymbol="FX:BTCUSD" />
          <RatesMiniChart pairSymbol="FX:ETHUSD" />
          <RatesMiniChart pairSymbol="FX:XRPUSD" />
          <RatesMiniChart pairSymbol="FX:LTCUSD" />
          <RatesMiniChart pairSymbol="FX:LTCUSD" />
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="mt-4 w-3/5 flex-1 justify-between items-center mr-10">
            <div className="w-full">
              <RatesAdvancedChart />
            </div>
          </div>
          <div className="mt-4 shadow-light rounded overflow-hidden" style={{minWidth : '355px',maxWidth : '450px'}}>
            <div className="w-full text-dark-200">
              <div className="custom-bg-dark--4 p-6">
                Bot details
              </div>
              <div className="p-6">
                <label className="text-13 text-dark-200 mb-2 inline-block">Pick a bot that was trained on this epic</label>
                <select className="input input--dark text-dark-200 mb-6">
                  <option>Select bot</option>
                  <option>Bot 1</option>
                </select>
                <div className="text-center">
                  <button className="btn btn-lg btn-purple-bright mx-auto">start selected bot</button>
                </div>
              </div>
              <div className="px-6 py-8 custom-bg-dark--4">
                <div>
                  <label className="text-13 text-dark-200 mb-2 inline-block">Order type</label>
                  <select className="input input--dark text-dark-200 mb-4">
                    <option>Select order type</option>
                    <option>Bot 1</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="text-13 text-dark-200 mb-2 inline-block">Size</label>
                  <input type="text" placeholder="1" className="input input--dark" />
                </div>
                <div className="flex items-center justify-center">
                  <button className="btn btn-xs btn-green inline-block mr-5">Buy</button>
                  <button className="btn btn-xs btn-red">sell</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="overflow-x-auto">
          <h4 className="text-base text-white mb-6">Trading Performance</h4>
          <PerformanceTable />
        </div>
    </div>
  )
}




export default LiveTrader;