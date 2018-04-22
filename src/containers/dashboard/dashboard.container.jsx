import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { fetchAllRides } from '../../actions/ride.actions';

import './dashboard.container.css';
import Ride from '../../components/ride/ride.component';



const Dashboard = props => (
  (
    <div className="dashboard-container">
    <div className="dashboard-user-actions-container"></div>
        <div className="dashboard-header">Dashboard</div>
            <div className="projects-list">
                <div className="upcoming-rides-container">
                <div class="scheduled-rides"></div></div>
                <div className="past-rides-container"></div>
             
            </div>
            </div>
        ));
    
Dashboard.propTypes = {
}


Dashboard.defaultProps = {
    
}

const mapStatetoProps = state => ({})

export default Dashboard; 