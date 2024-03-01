import React from 'react';
import FlightSelectionInformation from '../FlightSelectionInformation/FlightSelectionInformation';
import './ChooseYourFlight.css';


const ChooseYourFlight = () => {
  return (
    <div className="ChooseYourSeat">
      <h1>Welcome to Flight Booking System</h1>
      <FlightSelectionInformation 
        fromAirport="Murtala Muhammed International Airport, Lagos"
        toAirport="Nnamdi Azikiwe International Airport, Abuja"
        departureDateTime="2024-03-01 10:00 AM"
        arrivalDateTime="2024-03-01 11:30 AM"
        flightDuration="1 hour 30 minutes"
        flightNumber="ABC123"
      />
    </div>
  );
}

export default ChooseYourFlight;
