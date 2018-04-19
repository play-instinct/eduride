import React from 'react';
import './Signup.container.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../actions'

class Signup extends React.Component {
  submitHandler(val){
    const email = val.email;
    const password = val.password;
    const name = val.name;
    const phoneNumber = val.phoneNumber;
    const address = val.address;
    const is_approved = val.is_approved;
    const is_driver = val.is_driver;
    this.props.createUser(name, email, phoneNumber, address, password, is_driver);
    
  }

render () {
  return (<div className = "signup-container">
  <h1>Sign Up</h1>
  <form className="login" onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="post">
  <div className="test">
  <label htmlFor="name">Name</label>
  <Field name="name" component="input" id="name" type="text" placeholder="Danielle Jbali" required />
  </div>    
  <div className="test">
  <label htmlFor="username">Email</label>
  <Field name="email" component="input" id="email" type="text" placeholder="daniellejballi@yahoo.com" required />
  </div>
  <div className="test">
  <label htmlFor="phoneNumber">Phone Number</label>
  <Field name="phoneNumber" component="input" id="phoneNumber" type="tel" placeholder="5102323134" required />
  <div className="expl">Your phone number will only be used to send text notifications, and emergency situations. It will not be exposed to other users of the app.</div>
  </div>
  <div className="test">
  <label htmlFor="address">Address</label>
  <Field name="address" component="input" id="address" type="text" placeholder="Danielle Jbali" required />
  <div className="expl">Your address is used only as a default drop off point.</div>
  </div>
  <div className = "test">
  <label htmlFor="password">Password</label>
  <Field name="password" component="input" id="password" type="password" required />
  </div>
  <div className="test">
  <label htmlFor="is_driver">I would like to offer rides.</label>
  <Field name="is_driver" component="input" id="is_driver" type="checkbox" required />
  <div className="expl">Your application must be approved by a school representative.</div>
  </div>
  <div className="actions">
  <input type="submit" name="login" value="Sign Up"/> <a href="/privacy" className="i-forgot">Privacy Policy</a>
  </div>
  </form>
  </div>
) 
}
}

const mapStateToProps = state => ({

});

export default reduxForm({
  form: 'signup'
})(connect(mapStateToProps, {createUser})(Signup))