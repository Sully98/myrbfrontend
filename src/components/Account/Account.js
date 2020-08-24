import React from 'react';
import { Link, NavLink, useLocation, Switch, Route } from 'react-router-dom';
import linkImg from '../../assets/img/link.svg';

const Account = (props) => {
  const { pathname } = useLocation();

  let subRoutes = {
    profile : `${props.match.url}`,
    security : `${props.match.url}/security`,
    integrations : `${props.match.url}/integrations`
  };

  const headerText = () => {
    switch(pathname){
      case subRoutes.profile:
        return 'Profile update'
      case subRoutes.security:
        return 'Security settings'
      case subRoutes.integrations:
        return 'Integrations'
      default:
        return ''
    }
  }

  return (
    <div className={`bg-grey-100 px-20 py-12 text-dark-200`}>
      <p className="text-dark-200 mb-4 text-13">My account</p>
      <div className="flex justify-between items-center mb-6">
      <h3 className="h3 text-dark-300">{headerText()}</h3>
      </div>
      <div className="flex items-center flex-col sm:flex-row sm:items-stretch">
        <nav className="flex flex-row sm:flex-col sm:mr-10 items-start text-center sm:text-left whitespace-no-wrap">
          <NavLink exact to={subRoutes.profile} activeClassName="text-dark-700 bg-white" className="p-3 sm:p-4 py-3 w-24 sm:w-56 mb-4">My profile</NavLink>
          <NavLink to={subRoutes.security} activeClassName="text-dark-700 bg-white" className="p-3 sm:p-4 py-3 w-24 sm:w-56 mb-4">Security</NavLink>
          <NavLink to={subRoutes.integrations} activeClassName="text-dark-700 bg-white" className="p-3 sm:p-4 pr-6 py-3 w-32 sm:w-56 mb-4">Integrations</NavLink>
          <button className="sm:mt-auto p-4 hidden sm:inline-block">Log out</button>
        </nav>
        <div className="w-full sm:w-4/6 p-6 bg-grey-200 text-13 text-dark-200 rounded shadow-light" style={{minHeight : "500px", maxWidth:"420px"}}>
          <Switch>
            <Route path={subRoutes.security} component={SecuritySettings}></Route>
            <Route path={subRoutes.integrations} component={Integrations}></Route>
            <Route path={subRoutes.profile} component={ProfileUpdate}></Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Account;


function ProfileUpdate(props){
  return (
    <form className="">
      <div className="mb-5">
        <label className="block mb-2">Email</label>
        <input type="email" className="input bg-gray-200" placeholder="name@domain.com"></input>
      </div>
      <div class="mb-5">
        <label className="block mb-2">Username</label>
        <input type="email" className="input bg-gray-200" placeholder="myusername"></input>
      </div>
      <div class="mb-5">
        <label className="block mb-2">First Name</label>
        <input type="email" className="input" placeholder="Enter your first name"></input>
      </div>
      <div class="mb-8">
        <label className="block mb-2">Last Name</label>
        <input type="email" className="input" placeholder="Enter your last name"></input>
      </div>
      <div>
        <button className="btn btn-purple btn-xs">update profile</button>
      </div>
    </form>
  )
}

function SecuritySettings(props){
  return (
    <form className="">
      <div className="mb-5">
        <label className="block mb-2">Old password</label>
        <input type="password" className="input" placeholder=""></input>
      </div>
      <div className="mb-5">
        <label className="block mb-2">New password</label>
        <input type="password" className="input" placeholder="Enter password"></input>
      </div>
      <div className="mb-8">
        <label className="block mb-2">New password</label>
        <input type="password" className="input" placeholder="Enter password"></input>
      </div>
      <div>
        <button className="btn btn-purple btn-xs">change password</button>
      </div>
    </form>
  )
}

function Integrations(props){
  let integrations = [
    {
      name : 'Binance',
      username : 'Username'
    },
    {
      name : 'Binance',
      username : 'Username'
    },
  ]
  return (
    <div>
      <div className="b-b-lighter--2 -mx-6 p-6">
        <h5 className="text-base mb-4">Active exchanges</h5>
        <div>
          {
            integrations.map(integration => (
              <button className="btn btn-xs bg-gray-200 mr-4 mb-2 overflow-hidden text-dark-200 flex items-center integration-btn" style={{display:"flex",padding:0,backgroundColor:'#D7D7D8'}}>
                <span className="py-2 px-4 action inline-block bg-opacity-75">
                  <img src={linkImg} width="15px" height="15px"/>
                </span>
                <span className="py-2 pl-2 px-4 inline-block text-dark-200" style={{backgroundColor:'#E0E1E2'}}>
                  {integration.name}
                  <span className="lowercase"> ({integration.username})</span>
                </span>
                <button className="integration-delete">delete</button>
              </button>
            ))
          }
        </div>

      </div>
      <div>
        <h5 className="text-base mb-5 mt-8">Connect a new exchange</h5>
        <div className="mb-5">
          <label className="block mb-2">Select an exchange from the list to connect to:</label>
          <select className="input">
            <option>Coinbase</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div>
          <button className="btn btn-purple btn-xs">start</button>
        </div>
      </div>
    </div>
  )
}