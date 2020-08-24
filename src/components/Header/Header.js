import React, { useContext } from 'react';
import { header } from './Header.module.css'
import { Link } from 'react-router-dom';
import { LayoutContext } from '../Layout/Layout';

const Header = (props) => {
  const { openModal } = useContext(LayoutContext);

  return (
    <div className={`${header} ${props.bordered ? 'b-b' : null}`}>
      <ul className="flex items-center justify-between px-20 h-full">
        <li className="mr-4 lg:mr-12"><Link to="/"> MYRB </Link></li>
        {/* <li className="mr-4 lg:mr-12"><Link to="/"> Home </Link></li> */}
        <li className="mr-auto text-xs"><Link to="/about"> About your bot </Link></li>
        <li className="mr-2 md:mr-6 lg:mr-8"><Link onClick={() => openModal('login')}>Login</Link></li>
        <li className="b-l pl-2 md:pl-6"><button onClick={() => openModal('signup')} class="btn btn-white btn-sm">Register</button></li>
      </ul>
    </div>
  )
};

export default Header;