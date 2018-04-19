import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './ride.container.css';
import { createRide } from '../../actions'


class Ride extends React.Component {
  submitHandler(val) {
    const email = val.email;
    const name = val.customer_name;
    const driver = val.customer_name;
    const phoneNumber = val.phone_number;
    const seats = val.seats;
    const date = val.pickup_time;
    const courtesyTime = val.courtesyTime;
    const destination = val.address;
    const pickupLocation = val.pickupLocation;
    const radius = val.radius;
    const baby_seat = val.extras_baby;
    const wheelchair_access = val.extras_wheel;
    const note = val.note;
    this.props.createRide(email, driver, phoneNumber, seats, date, courtesyTime, destination, radius, baby_seat, note, wheelchair_access, pickupLocation)
  }

  render(){
    return(
      <div>
          <h1 className="sub-title">Offer a Ride</h1>
          <form className="myForm" onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="post">
            <fieldset id="customer">
              <label htmlFor="customer_name">Name </label>
              <Field name="customer_name" component="input" type="text" id="customer_name"/>
              <label htmlFor="phone_number">Phone </label>
              <Field name="phone_number" component="input" type="tel" id="phone_number"/>
              <label htmlFor="email_address">Email </label>
              <Field name="email" component="input" type="text" id="email_address"/>
            </fieldset>

        <fieldset id="seats">
          <legend>Ride Details</legend>
          <Field name="seats" component="input" type="number" id="seats"/>
          <label htmlFor="seats"> Available Seats</label>
          <div className="expl">Available Seats reffers to the number of students you are willing to pick up and deliver to their destinations on this ride.</div>
        </fieldset>
        <fieldset id="extras">
          <legend>Extras</legend>
          <label htmlFor="extras_baby"> 
          <Field name="extras_baby" component="input" type="checkbox" id="extras_baby"/>
           Child Seat 
          </label>
          <label> 
          <Field name="extras_wheel" component="input" type="checkbox" id="extras_wheel"/>

            Wheelchair Access </label>
        </fieldset>

        
        <fieldset id="pickup">
          <label htmlFor="pickup_time">Pickup Date/Time</label>
          <input type="datetime-local" name="pickup_time" id="pickup_time"/>
          <label htmlFor="courtesyTime">Courtesy Wait Time</label>
          <Field name="courtesyTime" component="select" id="courtesyTime">
            <option value="" selected="selected">Select One</option>
            <option value="0" >0 minutes</option>
            <option value="3" >3 Minutes</option>
            <option value="5" >5 Minutes</option>
            <option value="5" >10 Minutes</option>
          </Field>

          <label htmlFor="pickup_place" className="marg">Pickup Place</label>
          <Field name="pickup_place" component="select" id="pickup_place">
            <option value="" selected="selected">Select One</option>
            <option value="office" >Front of School</option>
            <option value="town_hall" >Back of School</option>
            <option value="telepathy" >Parking Lot</option>
          </Field>
        </fieldset>

        <fieldset id="dropoff">
        <label htmlFor="dropoff_place">Dropoff Place</label>
        <Field name="address" component="input" id="address" type="text" placeholder="7434 rudsdale street" required />
        <input type="number" name="radius" id="radius"/>
          <label> Miles</label>
          <div className="expl">The radius reffers to the distance you are willing to go from the pickup point to drop off other passengers. </div>  
        </fieldset>
        
        <fieldset id="instructions">
          <label htmlFor="notes">Special Instructions</label>
          <Field name="note" component="textarea" id="note" type="textarea" placeholder="Write your note here..." />
        </fieldset>

        <button id="submit">Offer this Ride</button>

      </form></div>
    )
  }

}
const mapStateToProps = state => ({
 
});


export default reduxForm({
  form: 'ride'
})(connect(mapStateToProps)(Ride))
