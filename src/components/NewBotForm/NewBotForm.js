import React, { useContext } from 'react';
import { formCard } from './NewBotForm.module.css';
import { Link, Switch, Route } from 'react-router-dom';
import { LayoutContext } from '../Layout/Layout';
import piggyImg from '../../assets/img/piggy_bank.svg';


const NewBotForm1 = (props) => {
  return (
    <div className={`${formCard} px-6 py-8`}>
      <form>
        <div className="mb-5">
          <label className="block mb-2">Name</label>
          <input className="input" placeholder="My new bot"></input>
        </div>
        <div className="mb-5">
          <label className="block mb-2">Architecture</label>
          <select className="input">
            <option>Select architecture</option>
            <option>Arch 1</option>
            <option>Arch 2</option>
            <option>Arch 3</option>
          </select>
        </div>
        <div className="mb-0 sm:mb-5 flex flex-col sm:flex-row">
          <div className="sm:mr-4 flex-grow mb-5 sm:mb-0">
            <label className="block mb-2">Trading pair</label>
            <select className="input">
              <option>ETH/BTC</option>
              <option>option 2</option>
              <option>option 3</option>
            </select>
          </div>
          <div className="flex-grow mb-5 sm:mb-0">
            <label className="block mb-2">Action Type</label>
            <input className="input" value="DQN"></input>
          </div>
        </div>
        <div className="sm:mb-5 flex flex-col sm:flex-row">
          <div className="sm:mr-4 flex-grow mb-5 sm:mb-0">
            <label className="block mb-2">Layer type</label>
            <select className="input">
              <option>MLP</option>
              <option>option 2</option>
              <option>option 3</option>
            </select>
          </div>
          <div className="flex-grow mb-5 sm:mb-0">
            <label className="block mb-2">Layers</label>
            <input className="input" placeholder="Enter your bot name"></input>
          </div>
        </div>
        <div className="mb-5">
          <label className="block mb-2">Datas</label>
          <input className="input" placeholder="Enter your datas"></input>
        </div>
        <div className="text-right mt-5">
          <Link to="/dashboard/new-bot/2" className="btn btn-purple btn-xs inline-block">Next</Link>
        </div>
      </form>
    </div>
  )
}

const NewBotForm2 = (props) => {
  const { openModal } = useContext(LayoutContext);
  return (
    <div className={`${formCard} px-6 py-8`}>
      <form>
        <div className="mb-5">
          <label className="block mb-2">Cryptos</label>
          <div className="flex flex-wrap items-center justify-start">
            <span className="mr-5 mb-2 flex items-center"><input type="checkbox"></input> <span className="ml-2 lh-0">ETH-BTC</span></span>
            <span className="mr-5 mb-2 flex items-center"><input type="checkbox"></input> <span className="ml-2 lh-0">XRP-ETH</span></span>
            <span className="mr-5 mb-2 flex items-center"><input type="checkbox"></input> <span className="ml-2 lh-0">BCH-USD</span></span>
            <span className="mr-5 mb-2 flex items-center"><input type="checkbox"></input> <span className="ml-2 lh-0">XRP-USD</span></span>
            <span className="mr-5 mb-2 flex items-center"><input type="checkbox"></input> <span className="ml-2 lh-0">BCH-USD</span></span>
            <span className="mr-5 mb-2 flex items-center"><input type="checkbox"></input> <span className="ml-2 lh-0">XRP-USD</span></span>
          </div>
        </div>
        <div className="mb-5">
          <label className="block mb-2">Stocks</label>
          <input className="input" placeholder="Enter your stocks"></input>
        </div>
        <div className="mb-5">
          <label className="block mb-2">Indices</label>
          <input className="input" placeholder="Enter your indices"></input>
        </div>
        <div className="mb-5">
          <label className="block mb-2">Others</label>
          <input className="input" placeholder=""></input>
        </div>
        <div className="mb-5 flex flex-col sm:flex-row">
          <div className="mr-0 sm:mr-4 flex-grow mb-5 sm:mb-0">
            <label className="block mb-2">Select colour identifier</label>
            <select className="input">
              <option className="colour-id colour-id-blue">Blue</option>
              <option>Yellow</option>
              <option>Red</option>
              <option>Purple</option>
              <option>Green</option>
            </select>
          </div>
          <div className="mr-0 sm:mr-4 flex-grow">
            <label className="block mb-2">Select icon</label>
            <select className="input">
              <option>Piggy bank</option>
              <option>Collecting</option>
              <option>Money bag</option>
            </select>
          </div>
        </div>
        <div className="text-center sm:text-right mt-5">
          <Link to="/dashboard/new-bot" className="btn btn-purple-outline btn-xs">Go back</Link>
          <button type="button" onClick={() => openModal('bot-creation-success')} className="btn btn-purple btn-xs inline-block ml-2 sm:ml-4">Make me money</button>
        </div>
      </form>
    </div>
  )
}
const NewBotForm = (props) => {
  return (
    <div className={`bg-grey-100 px-20 py-12 text-dark-200`}>
      <p className="text-dark-200 mb-4 ml-8 text-13">Create bot (1/2)</p>
      <div className="w-4/6 flex justify-between items-center mb-6 mr-10">
        <h3 className="h3 text-dark-300"> <Link to="/dashboard">&larr;</Link> <span>My new bot</span></h3>
      </div>
      <Switch>
        <Route path={`${props.match.url}/2`} component={NewBotForm2}></Route>
        <Route path={`${props.match.url}`} component={NewBotForm1}></Route>
      </Switch>
    </div>
  )
}

export default NewBotForm;