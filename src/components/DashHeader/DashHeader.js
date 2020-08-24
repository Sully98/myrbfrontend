import React from 'react';
import UserImage from '../UserImage/UserImage';
import { Link, NavLink } from 'react-router-dom';
import profileImg from '../../assets/img/ic-profile.svg';
import dashImg from '../../assets/img/ic-dash.svg';
import accountImg from '../../assets/img/ic-my-account.svg';
import chartImg from '../../assets/img/chart-line-solid.svg';
import lifeBouyImg from '../../assets/img/life-bouy.svg';
import mobileNavIconImg from '../../assets/img/ic_nav.svg';
import { header, desktopNav, mobileNav } from './DashHeader.module.css';

let user = {
  name : 'Daniel P.'
}

const DashHeader = (props) => {

  let url = window.location.href;
  let isDarkPage = url.includes('/dashboard/bot') || url.includes('/dashboard/trader');

  const handleToggleMobileNav = () => {
    let nav = document.getElementsByClassName(mobileNav)[0];
    nav.style.display = nav.style.display == 'none' ? 'block' : 'none';
  }

  return (
    <header className={`${header} ${isDarkPage ? 'custom-bg-dark--2' : 'bg-white'} fixed-top`}>
      <ul className={`px-5 md:px-20 py-4 flex items-center justify-between h-full text-dark-200 ${isDarkPage ? 'b-b-lighter' : 'b-b-light'}`}>
        <li><Link to="/">MYRB</Link></li>
        <li className="flex items-center order-first sm:order-none">
          <UserImage user={user}/>
          <span class="ml-4">{user.name}</span>
        </li>
        <li onClick={handleToggleMobileNav} role="button" className="sm:hidden">
          <img src={mobileNavIconImg} className={`${isDarkPage ? 'filter-white' : ''}`}/>
        </li>
      </ul>
      <DesktopNav />
      <MobileNav />
    </header>
  )
}

function DesktopNav(props){
  return (
    <nav className={`${desktopNav} hidden sm:block`}>
      <ul className="px-5 md:px-20 py-4 flex items-center text-dark-100">
        <li className="mr-4 md:mr-5 lg:mr-12">
          <NavLink exact to="/dashboard" activeClassName="active-dot" className="flex items-center">
            <img className="mr-3" src={dashImg}></img>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="flex items-center mr-3 md:mr-5 lg:mr-12">
          <NavLink to="/about" activeClassName="active-dot" className="flex items-center">
            <img className="mr-2 md:mr-3" src={profileImg}></img>
            <span>About your bots</span>
          </NavLink>
        </li>
        <li className="flex items-center mr-3 md:mr-5 lg:mr-12">
          <NavLink to="/dashboard/trader" activeClassName="active-dot" className="flex items-center">
            <img className="mr-2 md:mr-3" src={chartImg} width="18" height="20"></img>
            <span>Live trader</span>
          </NavLink>
        </li>
        <li className="flex items-center mr-3 md:mr-5 lg:mr-12">
          <NavLink to="/dashboard/how" activeClassName="active-dot" className="flex items-center">
            <img className="mr-2 md:mr-3" src={lifeBouyImg}></img>
            <span>How-to</span>
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink to="/dashboard/account" activeClassName="active-dot" className="flex items-center">
            <img className="mr-2 md:mr-3" src={accountImg}></img>
            <span>My Account</span>
          </NavLink>
        </li>
        <li className="ml-auto">
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  )
}

export default DashHeader;

function MobileNav(props){
  const handleCloseMobileNav = () => {
    let nav = document.getElementsByClassName(mobileNav)[0];
    nav.style.display = 'none';
  }
  return (
    <nav className={`${mobileNav} hidden`}>
      <ul className="pl-10 py-4 flex flex-col items-start text-dark-100">
        <li className="mb-6">
          <NavLink exact to="/dashboard" activeClassName="mobile-active" onClick={handleCloseMobileNav} className="flex items-center">
            <img className="mr-3" src={dashImg}></img>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="flex items-center mb-6">
          <NavLink to="/about" activeClassName="mobile-active" onClick={handleCloseMobileNav} className="flex items-center">
            <img className="mr-3" src={profileImg}></img>
            <span>About your bots</span>
          </NavLink>
        </li>
        <li className="flex items-center mb-6">
          <NavLink to="/dashboard/trader" activeClassName="mobile-active" onClick={handleCloseMobileNav} className="flex items-center">
            <img className="mr-3" src={chartImg} width="18" height="20"></img>
            <span>Live trader</span>
          </NavLink>
        </li>
        <li className="flex items-center mb-6">
          <NavLink to="/dashboard/how" activeClassName="mobile-active" onClick={handleCloseMobileNav} className="flex items-center">
            <img className="mr-3" src={lifeBouyImg}></img>
            <span>How-to</span>
          </NavLink>
        </li>
        <li className="flex items-center mb-6">
          <NavLink to="/dashboard/account" activeClassName="mobile-active" onClick={handleCloseMobileNav} className="flex items-center">
            <img className="mr-3" src={accountImg}></img>
            <span>My Account</span>
          </NavLink>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  )
}
