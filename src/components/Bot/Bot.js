import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import BotTable from '../BotTable/BotTable';
import { LayoutContext } from '../Layout/Layout';
import RatesAdvancedChart from '../RatesAdvancedChart/RatesAdvancedChart';
import linkImg from '../../assets/img/open-external-link.svg';

import botDetails from './bot-details.json';
import performanceData from './performance-data.json';
import trainingDetails from './training-details.json'

const Bot = (props) => {
  const { openModal } = useContext(LayoutContext);

  const [training, setTraining] = useState(false);
  const handleStartTraining = () => {
    setTraining(true);
    setTimeout(() => setTraining(false), 3000)
  }
  const trainButton = training ? (
    <button className="btn btn-yellow-pale mr-2 md:mr-4 overflow-hidden">
      <span className="action inline-block mx-2 sm:mx-4 bg-opacity-75">&#10074;&#10074;</span>
      <span className="py-2 px-2 sm:px-4 inline-block btn-yellow">pause training</span>
    </button>
  ) : (
    <button onClick={handleStartTraining} className="btn btn-green-pale mr-2 md:mr-4 overflow-hidden">
    <span className="action inline-block mx-2 sm:mx-4 bg-opacity-75">&#x25B6;</span>
    <span className="py-2 px-2 sm:px-4 inline-block btn-green">start training</span>
    </button>
  )

  return (
    <div className={`custom-bg-dark--3 px-20 py-12 text-white`}>
      <p className="mb-4 ml-8 text-13">Bot activities</p>
      <div className="w-full flex flex-wrap justify-between items-center mb-4 mr-10">
        <h3 className="h3 flex items-center mb-2">
        <Link to="/dashboard">&larr; </Link>
          <span className="mx-3">
            My seed round bot
          </span>
          <img src={linkImg} style={{width:"18px",height:"18px"}}/>
        </h3>
        <div className="flex ml-auto mb-2">
          <button className="btn btn-xs btn-purple mr-2 md:mr-4">Edit</button>
          {trainButton}
          <button onClick={() => openModal('delete-bot')} className="btn btn-xs btn-white-red">delete</button>
        </div>
      </div>
      <div className="">
        <div className="w-full flex flex-wrap justify-between items-start mb-6">
          <div className="mb-8">
            <RatesAdvancedChart />
          </div>
          <div className="flex-1 sm:ml-2" style={{minWidth:'300px',maxWidth : '450px'}}>
            <BotTable data={botDetails}/>
          </div>
        </div>
        <div className="flex flex-col w-5/5 sm:w-3/5 mt-0 xl:-mt-56">
          <BotTable data={performanceData}/>
          <div className="mt-8">
            <BotTable data={trainingDetails}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bot;