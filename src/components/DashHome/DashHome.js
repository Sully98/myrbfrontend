import React from 'react';
import LearningMaterialsList from '../../components/LearningMaterialsList/LearningMaterialsList';

import { Link } from 'react-router-dom';
import searchImg from '../../assets/img/search-solid.svg';

import bots from './bots.json';

import piggyImg from '../../assets/img/piggy_bank.svg'
import collectingImg from '../../assets/img/collecting.svg';
import moneyBagImg from '../../assets/img/money_bag.svg';

import { botCard, learningMaterials,
  botCardYellow, botCardBlue, botCardGreen, botCardPurple, botCardRed,
  filterBlue,filterPurple,filterYellow,filterGreen, filterRed } from './DashHome.module.css';


const BotCard = ({ bot }) => {
  let botCardFilterColor = () => {
    switch(bot.color){
      case 'purple':
        return filterPurple;
      case 'blue':
        return filterBlue;
      case 'yellow':
        return filterYellow;
      case 'green':
        return filterGreen;
      case 'red':
        return filterRed;
      default:
        return filterYellow;
    }
  }
  let botCardImg = () => {
    switch(bot.icon){
      case 'collecting':
        return collectingImg;
      case 'piggy':
        return piggyImg;
      case 'moneyBag':
        return moneyBagImg;
      default:
        return piggyImg;
    }
  }
  let botCardColor = () => {
    switch(bot.color){
      case 'purple':
        return botCardPurple;
      case 'blue':
        return botCardBlue;
      case 'yellow':
        return botCardYellow;
      case 'green':
        return botCardGreen;
      case 'red':
        return botCardRed;
      default:
        return botCardYellow;
    }
  }

  return (
    <Link to="/dashboard/bot">
    <div className={`${botCard} ${botCardColor()} p-5 flex items-center mb-4 sm:mr-4`}>
      <img src={botCardImg()} className={`mr-4 ${botCardFilterColor()}`}/>
      <div>
        <h5 className="text-dark-500 h5">{bot.name}</h5>
        <p className="text-dark-500 text-xs text-opacity-75">{bot.tradingPair} </p>
        <p className="mt-4 text-green-100 text-xxs">{bot.returns} monthly returns</p>
      </div>
    </div>
    </Link>
  )
}
const FirstBot = () => (
  <div className="flex items-center justify-center flex-col mt-20 mb-16">
    <p className="text-dark-200 text-base mb-8">You haven’t created a bot yet</p>
    <Link to="/dashboard/new-bot" className="btn btn-xs btn-purple">&#43; Make your first bot</Link>
  </div>
);

const DashHome = (props) => {
  return (
    <div className={`bg-grey-100 px-20 py-12 text-dark-200`}>
      <p className="text-dark-200 mb-4 text-13">Home</p>
      <div className="w-full sm:w-4/6 flex flex-wrap justify-between items-center mb-4 sm:mb-6 sm:mr-10">
        <h3 className="h3 text-dark-300 mb-2">My Bots</h3>
        <div className="flex items-center xs:my-4 mb-2">
          <div className={`search mr-2 sm:mr-4`}>
            <input type="search" placeholder="Search bots" className="input py-2"></input>
            <img className="search__icon" src={searchImg}></img>
          </div>
          <Link to="/dashboard/new-bot" className="btn btn-xs btn-purple">&#43; Create bot</Link>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row md:items-start">
        <div className={`w-full md:w-4/6 sm:mr-10 flex flex-wrap ${bots.length ? 'md:justify-between ssm:justify-center sm:justify-start': 'justify-center'}`}>
          {
            !bots.length ?
              <FirstBot /> :
              bots.map(bot => <BotCard bot={bot} key={bot.name}/>)
          }
        </div>
        <div className={`${learningMaterials} w-full md:w-2/6 mx-auto md:w-full" style`}>
          <LearningMaterialsList />
        </div>
      </div>
    </div>
  )
}

export default DashHome;