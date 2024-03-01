import React from 'react';
import ManageBookingItems from '../Components/FlightSelectionOnePage/ManageBookingItems/ManageBookingItems';
import ChooseYourFlight from '../Components/FlightSelectionOnePage/ChooseYourFlight/ChooseYourFlight';
import SeatSelection from '../Components/FlightSelectionOnePage/SeatSelection/SeatSelection';
import FlightSelectionInformation from '../Components/FlightSelectionOnePage/FlightSelectionInformation/FlightSelectionInformation';





const FlightSelectionOnePage = () => {
  return (
  <>
    <div>
         <ManageBookingItems />
        <ChooseYourFlight />
        <SeatSelection />
        <FlightSelectionInformation />
    </div>
    </>
  )
}
export default FlightSelectionOnePage