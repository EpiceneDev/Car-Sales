import React, {dispatch} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';



const Dashboard = (props) => {
  const { state, removeFeature } = props
 
 
  const removeFeature = item => {
    // return {
    //   type: "REMOVE_FEATURES",
    //   payload: item
    // }
  };
  

  const buyItem = item => {
    // dipsatch an action here to add an item
    // dispatch({
    //   type: "BUY_ITEM",
    //   state.car.features: action.payload
    // })
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {state};
}

export default connect(mapStateToProps, {buyItem, removeFeature})(Dashboard);
