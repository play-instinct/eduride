import appConfig from '../config/appConfig';
import { push } from 'react-router-redux';


export const REQUEST_TO_CREATE_RIDE_TRIGGERED = 'REQUEST_TO_CREATE_RIDE_TRIGGERED';
export const REQUEST_TO_CREATE_RIDE_SUCCESS = 'REQUEST_TO_CREATE_RIDE_SUCCESS';
export const REQUEST_TO_CREATE_RIDE_FAILURE = 'REQUEST_TO_CREATE_RIDE_FAILURE';



export function createRide(driver, email, phoneNumber, date, courtesyTime, destination, radius, note, pickupLocation, seats, baby_seat, wheelchair_access) {
    const promise = fetch(`${appConfig.RIDES_ENDPOINT}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          driver,
          phoneNumber,
          date,
          seats,
          courtesyTime,
          destination,
          radius,
          baby_seat,
          note,
          wheelchair_access,
          pickupLocation
        }),
    });
    return {
        onRequest: REQUEST_TO_CREATE_RIDE_TRIGGERED,
        onSuccess: handleCreateRideResponse,
        onFailure: REQUEST_TO_CREATE_RIDE_FAILURE,
        promise,
    };
  }


  const handleCreateRideResponse = (response, dispatch) => {
    console.log('TEST');
    dispatch({
        type: REQUEST_TO_CREATE_RIDE_SUCCESS,
        response,
    });
    dispatch(push('/dashboard'));
};