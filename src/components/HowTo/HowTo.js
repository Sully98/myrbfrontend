import React, { useState } from 'react';
import searchImg from '../../assets/img/search-solid.svg';
import howTos from './how-tos.json';

const HowTo = (props) => {
  const [ howToArticle, setHowToArticle ] = useState(howTos[0]);

  const handleOpenHowTo = (id) => {
    let howToArticle = howTos.find((howTo) => howTo.id === id);
    setHowToArticle(howToArticle);

    let howToArticleElement = document.getElementById('how-to-article');
    howToArticleElement.scrollIntoView();
  }

  return (
    <div className={`bg-grey-100 px-20 py-12 text-dark-200`}>
      <p className="text-dark-200 mb-4 text-13">How-to</p>
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h3 className="h3 text-dark-300 mb-2">Browse help</h3>
        <div className="flex w-full" style={{maxWidth : "395px"}}>
          <div className={`search w-full mb-2`}>
            <input type="search" placeholder="Search help" className="input py-2"></input>
            <img className="search__icon" src={searchImg}></img>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row bg-white text-dark-200 p-6 py-0 shadow-light rounded">
        <div className="w-full sm:w-1/3 how-to-border">
          {
            howTos.map((howTo) => (
              <div onClick={(e) => handleOpenHowTo(howTo.id)} className="mr-3 py-6 b-b-lighter--2 cursor-pointer" key={howTo.id}>
                <p className={`${howToArticle.id == howTo.id ? 'text-purple-100':''} text-base hover:text-purple-100`} style={{maxWidth : "330px"}}>{howTo.title}</p>
                <p className="mt-3 text-xs">by {howTo.user.name} at {howTo.time}</p>
              </div>
            ))
          }
        </div>
        <div className="w-full sm:w-2/3 flex-1 py-6 p-6 sm:p-10" id="how-to-article">
          <p className="text-13">{howToArticle.body}</p>
          <p className="mt-5 text-13">{howToArticle.body}</p>
        </div>
      </div>
    </div>
  )
}

export default HowTo;