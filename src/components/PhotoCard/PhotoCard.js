import React from 'react';
import { card } from './PhotoCard.module.css';

const PhotoCard = (props) => {
  return (
    <div className={`${card} ${props.className} flex items-center justify-between`}>
      <img className="mr-4" src={props.img}></img>
      <p className="text-base">{ props.children }</p>
    </div>
  )
}

export default PhotoCard;