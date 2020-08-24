import React from 'react';
import performanceData from './performance-data.json';
import { table } from './PerformanceTable.module.css';

const Table = (props) => {
  return (
    <table className={`${table} mx-auto w-full uppercase`}>
      <thead>
        <tr className="text-xs text-dark-200 custom-bg-dark--4">
          <th className="text-left pl-8">Date</th>
          <th>Pair</th>
          <th>last</th>
          <th>amount</th>
          <th>filled</th>
          <th>total</th>
          <th>type</th>
        </tr>
      </thead>
      <tbody className="text-dark-200">
          {
            performanceData.map((performance) => {
              return (
                <tr>
                  <td>{performance.date}</td>
                  <td>{performance.pair}</td>
                  <td>{performance.last}</td>
                  <td>{performance.amount}</td>
                  <td>{performance.filled}</td>
                  <td>{performance.total}</td>
                  <td className={ performance.type == "buy" ? 'text-green-100' : 'text-red-100' }>{performance.type}</td>
                </tr>
              )
            })
          }
      </tbody>
    </table>
  )
}

export default Table;