import React from 'react';
import { connect } from 'react-redux';

//import { function names here } from '../actions/carSalesActions';

const Header = props => {
  console.log(props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.carSalesReducer.additionalPrice,
    car: state.carSalesReducer.car,
    additionalFeatures: state.carSalesReducer.additionalFeatures
  };
};

export default connect(
  mapStateToProps
  //add imported functions here
)(Header);
