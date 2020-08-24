import React from 'react';

const Feature = (props) => {
  return (
    <div className={`${props.className} flex items-center py-2 px-2 sm:px-4 lg:px-8 my-8 md:my-0 first-no-pl`}>
      <img className="d-inline-block mr-4" src={props.img} />
      <p className="w-56">{props.children}</p>
    </div>
  )
}

export default Feature;