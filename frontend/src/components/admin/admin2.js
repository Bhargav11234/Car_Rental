import { useEffect, useState } from 'react';
import axios from "axios";

import { BASE_URL } from "./../../utils/config";

function Admin2() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/booking/`,bookings)
      .then(bookings => setBookings(bookings.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "Center" }} className='mt-30'>List of All Booking</h2>
      <div className='mt-20 mb-20 d-flex justify-content-center align-items-center'>
        <div className='w-50'>{
        bookings.map(booking => {
                  
                    <p>{booking.firstName}</p>
                   
                })
              }
          {/* <table className='table'>
            <thead>
              <tr>
                <th>firstname</th>
                <th>lastname</th>
                <th>fromAddress</th>
                <th>toAddress</th>
                <th>phoneNumber</th>
                <th>persons</th>
                <th>luggage</th>
                <th>Journey date</th>
                <th>Journet time</th>
              </tr>
            </thead>
            <tbody>
              {
                bookings.map(booking => {
                  <tr >
                    <p>{booking.firstName}</p>
                    <td>{booking.firstName}</td>
                    {console.log(booking.firstName)}
                    <td>{booking.lastName}</td>
                    <td>{booking.fromAddress}</td>
                    <td>{booking.toAddress}</td>
                    <td>{booking.phoneNumber}</td>
                    <td>{booking.persons}</td>
                    <td>{booking.luggages}</td>
                    <td>{booking.journeyDate}</td>
                    <td>{booking.journeyTime}</td>
                  </tr>
                })
             }
            </tbody>
          </table> */}
        </div>
      </div>
    </>
  );
}

export default Admin2;
