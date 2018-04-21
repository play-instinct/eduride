import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './ride.container.css';
import { createRide } from '../../actions'


class Ride extends React.Component {
  submitHandler(val) {
    const body = {
      email: val.email,
      name: val.customer_name,
      driver: val.customer_name,
      phoneNumber: val.phone_number,
      seats: val.seats,
      date: val.pickup_time,
      courtesyTime: val.courtesyTime,
      destination: val.address,
      pickupLocation: val.pickup_place,
      radius: val.radius,
      baby_seat: val.extras_baby,
      wheelchair_access: val.extras_wheel,
      note: val.note,
    }
    console.log(body)
    this.props.createRide(body)
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
          <Field name="pickup_time" id="pickup_time" component="input" type="datetime-local"/>
          <label htmlFor="courtesyTime">Courtesy Wait Time</label>
          <Field name="courtesyTime" component="select" id="courtesyTime">
            <option value="">Select One</option>
            <option value="0" >0 minutes</option>
            <option value="3" >3 Minutes</option>
            <option value="5" >5 Minutes</option>
            <option value="5" >10 Minutes</option>
          </Field>

          <label htmlFor="pickup_place" className="marg">Pickup Place</label>
          <Field name="pickup_place" component="select" id="pickup_place">
            <option value="">Select One</option>
            <option value="front_of_school" >Front of School</option>
            <option value="back_of_school" >Back of School</option>
            <option value="parking_lot" >Parking Lot</option>
          </Field>
        </fieldset>

        <fieldset id="dropoff">
        <label htmlFor="dropoff_place">Dropoff Place</label>
        <Field name="address" component="input" id="address" type="text" placeholder="7434 rudsdale street" required />
        <Field name="radius" component="input" id="radius" type="number" required />
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
})(connect(mapStateToProps, { createRide })(Ride))
