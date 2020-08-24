import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { modal, modalOverlay, modalHeader, modalWhite, modalClose, successImage } from './Layout.module.css';
import successImg from '../../assets/img/ic-success-alt-big.svg';

const LayoutContext = React.createContext({});

const Layout = (props) => {
  const [ loginModalOpen, setLoginModalOpen ] = useState(false);
  const [ signUpModalOpen, setSignUpModalOpen ] = useState(false);
  const [ passwordResetModalOpen, setPasswordResetModalOpen ] = useState(false);
  const [ botCreationSuccessModalOpen, setBotCreationSuccessModalOpen ] = useState(false);
  const [ botDeletionModalOpen, setBotDeletionModalOpen ] = useState(false);

  const openModal = (type) => {
    switch(type){
      case 'login':
        setLoginModalOpen(true);
        return closeOtherModals('login');
      case 'signup':
        setSignUpModalOpen(true);
        return closeOtherModals('signup');
      case 'password-reset':
        setPasswordResetModalOpen(true);
        return closeOtherModals('password-reset');
      case 'bot-creation-success':
        setBotCreationSuccessModalOpen(true);
        return closeOtherModals('bot-creation-success');
      case 'delete-bot':
        setBotDeletionModalOpen(true);
        return closeOtherModals('delete-bot')
      default:
        return;
    }
  }
  const closeModal = (type) => {
    switch(type){
      case 'login':
        return setLoginModalOpen(false);
      case 'signup':
        return setSignUpModalOpen(false);
      case 'password-reset':
        return setPasswordResetModalOpen(false);
      case 'bot-creation-success':
        return setBotCreationSuccessModalOpen(false);
      case 'delete-bot':
        return setBotDeletionModalOpen(false);
      default:
        return;
    }
  }
  function closeOtherModals(type){
    let modals = ['login','signup','password-reset','bot-creation-success','delete-bot'];
    for(let modal of modals){
      if(!(modal == type)){
        closeModal(modal);
      }
    }
  }

  return (
    <LayoutContext.Provider value={{openModal, closeModal}}>
      <div className="">
        { props.children }
        <LoginModal open={loginModalOpen} closeModal={() => closeModal('login')} />
        <SignUpModal open={signUpModalOpen} closeModal={() => closeModal('signup')} />
        <PasswordResetModal open={passwordResetModalOpen} closeModal={() => closeModal('password-reset')} />
        <BotCreationSuccessModal open={botCreationSuccessModalOpen} closeModal={() => closeModal('bot-creation-success')} />
        <DeleteBotModal open={botDeletionModalOpen} closeModal={() => closeModal('delete-bot')} />
      </div>
    </LayoutContext.Provider>
  )
}

export { Layout, LayoutContext }

/* Layout Components - Modals, etc */
function LoginModal(props){
  const { openModal } = React.useContext(LayoutContext);

  return props.open && (
    <div className={`${modalOverlay} text-dark-200`}>
    <div className={modal}>
      <div className={modalHeader}>
        <h5 className="text-base text-dark-400">Login</h5>
        <button onClick={props.closeModal} className={modalClose}>X</button>
      </div>
      <div className="px-6 pt-8 pb-12">
        <form>
          <div className="mb-5">
            <label className="block mb-2">Username</label>
            <input type="text" className="input" placeholder="Choose a unique username"></input>
          </div>
          <div className="mb-3">
            <label className="block mb-2">Password</label>
            <input type="password" className="input" placeholder="Enter your password"></input>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input type="checkbox"></input><label className="ml-2"> Remember me</label>
            </div>
            <button onClick={() => openModal('password-reset')} className="btn-text text-red-100">Forgot password?</button>
          </div>
          <div className="text-center mt-10">
            <Link to="/dashboard" className="btn btn-purple btn-xs">login to your account</Link>
          </div>
        </form>
        <p className="mt-6 text-13 text-center text-dark-600">I don't have an account. <button onClick={() => openModal('signup')} className="btn-text btn-text-blue">Register</button></p>
      </div>
    </div>
  </div>
  )
};

function SignUpModal(props){
  const { openModal } = React.useContext(LayoutContext);

  return props.open && (
    <div className={`${modalOverlay} text-dark-200`}>
      <div className={modal}>
        <div className={modalHeader}>
          <h5 className="text-base text-dark-400">Register</h5>
          <button onClick={props.closeModal} className={modalClose}>X</button>
        </div>
        <div className="px-6 pt-8 pb-12">
          <form>
            <div className="mb-5">
              <label className="block mb-2">Email</label>
              <input type="email" className="input" placeholder="Enter your email"></input>
            </div>
            <div className="mb-5">
              <label className="block mb-2">Username</label>
              <input type="text" className="input" placeholder="Choose a unique username"></input>
            </div>
            <div className="mb-10">
              <label className="block mb-2">Password</label>
              <input type="password" className="input" placeholder="Enter your password"></input>
            </div>
            <div className="text-center">
              <Link to="/dashboard" className="btn btn-purple btn-xs">create your account</Link>
            </div>
          </form>
          <p className="mt-6 text-13 text-center text-dark-600">I have an account. <button onClick={() => openModal('login')} className="btn-text btn-text-blue">Login</button></p>
        </div>
      </div>
    </div>
  )
}


function PasswordResetModal(props){
  const { openModal } = React.useContext(LayoutContext);

  return props.open && (
    <div className={`${modalOverlay} text-dark-200`}>
    <div className={modal}>
      <div className={modalHeader}>
        <h5 className="text-base text-dark-400">Reset your password</h5>
        <button onClick={props.closeModal} className={modalClose}>X</button>
      </div>
      <div className="px-6 pt-8 pb-12">
        <form>
          <div className="mb-5">
            <label className="block mb-2">Enter the email associated with your account</label>
            <input type="email" className="input" placeholder="Enter your email"></input>
          </div>
          <div className="text-center mt-10">
            <button className="btn btn-purple btn-xs">reset your password</button>
          </div>
        </form>
        <p className="mt-6 text-13 text-center text-dark-600">I don't have an account. <button onClick={() => openModal('signup')} className="btn-text btn-text-blue">Register</button></p>
      </div>
    </div>
  </div>
  )
}

function BotCreationSuccessModal(props){
  const { openModal } = React.useContext(LayoutContext);

  return props.open && (
    <div className={`${modalOverlay} text-dark-200`}>
    <div className={`${modal} ${modalWhite}`} style={{maxHeight:"615px"}}>
      <div className={modalHeader}>
        <h5 className="text-base text-dark-400"></h5>
        <button onClick={props.closeModal} className={modalClose}>X</button>
      </div>
      <div className="px-6 pt-6 pb-10">
        <h3 className="h3 text-dark-300 mb-10 text-center">Bot created successfully!</h3>
        <div className="flex justify-center items-center flex-col mt-10">
          <img className={`${successImage} mb-8`} src={successImg} alt="Success alt image"/>
          <Link to="/dashboard/trader" onClick={props.closeModal} className="btn btn-xs btn-purple mb-6">view bot in action</Link>
          <Link to="/dashboard" onClick={props.closeModal} className="btn-text uppercase text-dark-400">Back Home</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

function DeleteBotModal(props){
  const { openModal } = React.useContext(LayoutContext);

  return props.open && (
    <div className={`${modalOverlay} text-dark-200`}>
    <div className={`${modal} ${modalWhite}`}>
      <div className={modalHeader}>
        <h5 className="text-base text-dark-400"></h5>
        <button onClick={props.closeModal} className={modalClose}>X</button>
      </div>
      <div className="px-6 pt-6 pb-10">
        <h3 className="h3 text-dark-300 mb-10 text-center">Type the name of the bot to confirm deletion “My first bot"</h3>
        <div className="mb-5 text-center">
          <input type="email" className="input mb-10" placeholder="Enter bot name"></input>
          <button className="btn btn-xs btn-red-white">Delete bot</button>
        </div>
      </div>
    </div>
  </div>
  )
}