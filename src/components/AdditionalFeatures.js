import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';


const AdditionalFeatures = ({ store }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type="1">
          {store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


export default connect(null, {})(AdditionalFeatures);
