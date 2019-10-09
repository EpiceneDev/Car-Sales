import React from 'react';
import { connect } from 'react-redux';

const AdditionalFeature = ({ feature }) => {

  const handleClick = e => {

  };
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, {})(AdditionalFeature);
