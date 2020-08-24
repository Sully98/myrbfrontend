import React from 'react';
import { circle } from './UserImage.module.css';

const UserImage = (props) => {
  return (
    <span className={`${circle} flex items-center justify-center`}>{props.user.name.split('')[0]}</span>
  )
}

export default UserImage;