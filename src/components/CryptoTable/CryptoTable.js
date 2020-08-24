import React from 'react';
import { table } from './CryptoTable.module.css';
import bitcoinImg from '../../assets/img/bitcoin.svg';
import ethereumImg from '../../assets/img/ethereum.svg';
import cryptoData from './crypto-data.json';

const Table = (props) => {
  return (
    <table className={`${table} mx-auto my-16`}>
      <thead>
        <tr>
          <th className="text-left pl-8">name</th>
          <th>mkt cap</th>
          <th>fd mkt cap</th>
          <th>last</th>
          <th>avail coins</th>
          <th>total coins</th>
          <th>total vol.</th>
          <th>ch %</th>
        </tr>
      </thead>
      <tbody>
          {
            cryptoData.map((currency) => {
              return (
                <tr>
                  <td className="flex items-center">
                    <img className="ml-8 mr-4" src={currency.name == "Bitcoin" ? bitcoinImg : ethereumImg} />
                    <span>{currency.name}</span>
                  </td>
                  <td>{currency.mktCap}</td>
                  <td>{currency.fwdMktCap}</td>
                  <td>{currency.last}</td>
                  <td>{currency.availCoins}</td>
                  <td>{currency.totalCoins}</td>
                  <td>{currency.tradedVol}</td>
                  <td className={Number(currency.change) >= 0 ? 'text-green-100' : 'text-red-100' }>{currency.change}%</td>
                </tr>
              )
            })
          }
      </tbody>
    </table>
  )
}

export default Table;