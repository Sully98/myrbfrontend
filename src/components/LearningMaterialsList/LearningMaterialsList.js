import React from 'react';
import materials from './materials.json';
import { Link } from 'react-router-dom';

const LearningMaterialsList = (props) => {
  return (
    <aside className="bg-white w-full rounded-sm shadow-light">
      <div>
        <h4 className="text-base p-6 text-dark-400">Learning Materials</h4>
          <div className="bg-grey-100">
            {
              materials.map((material) => (
                <div className="pt-6 pb-6 mx-6 b-b-lighter" key="material.title">
                  <p className="mb-3">{material.title}</p>
                  <p>by {material.user.name} at {material.time}</p>
                </div>
              ))
            }
            <Link to="/dashboard/how" className="btn btn-xs btn-purple-outline mx-6 my-4">see all</Link>
          </div>
      </div>
    </aside>
  )
}

export default LearningMaterialsList;