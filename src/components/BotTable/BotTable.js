import React from 'react';
import { tableContainer,table, head, body } from './BotTable.module.css';

const Table = (props) => {
  return (
    <div className={tableContainer}>
      <div className={`${head} py-4`}>
        <span className="inline-block text-base">{props.data.title}</span>
      </div>
      <table className={table}>
      <th><td></td><td></td></th>
      <tbody className={`${body} pb-4 text-dark-200 text-13`}>
        {
          Object.keys(props.data.data).map((field) => (
            <tr className="b-b-lighter">
              <td className="px-6 pl-0 py-4">{field}:</td>
              <td className="py-4 inline-block text-white">{props.data.data[field]}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>

    // </div>
  )
}

export default Table;