// BookingForm.js
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import "../../styles/booking-form.css";
import { Form, FormGroup } from 'reactstrap';
import { BASE_URL } from "./../../utils/config";


const BookingForm = () => {
  const navigate = useNavigate()
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    fromAddress: '',
    toAddress: '',
    persons: '1 Person',
    luggages: '1 luggage',
    journeyDate: '',
    journeyTime: '',
    notes: '',
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${BASE_URL}/form/submitBooking`, bookingData);
      console.log('Booking submitted successfully');
    
      window.location.href = 'https://rzp.io/l/l6ZzVGb';
    } catch (error) {
      console.log("eror");
      console.error('Error submitting booking:', error);
      // Handle error as needed
    }
  };

  return (
    <Form onSubmit={submitHandler}>
    <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <input type="text" name="firstName" placeholder="First Name" value={bookingData.firstName} onChange={handleChange} required/>
    </FormGroup>
    
    <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <input type="text" name="lastName" placeholder="Last Name" value={bookingData.lastName} onChange={handleChange} required/>
    </FormGroup>

    <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <input type="email" name="email" placeholder="Email" value={bookingData.email} onChange={handleChange} required />
    </FormGroup>

    <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <input type="number" name="phoneNumber" placeholder="Phone Number" value={bookingData.phoneNumber} onChange={handleChange}required />
    </FormGroup>

    <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <input type="text" name="fromAddress" placeholder="From Address" value={bookingData.fromAddress} onChange={handleChange} />
    </FormGroup>

    <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <input type="text" name="toAddress" placeholder="To Address" value={bookingData.toAddress} onChange={handleChange} />
    </FormGroup>

    <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <select name="persons" value={bookingData.persons} onChange={handleChange}>
        <option value="1 Person">1 Person</option>
        <option value="2 Person">2 Person</option>
        <option value="3 Person">3 Person</option>
        <option value="4 Person">4 Person</option>
        <option value="5+ Person">5+ Person</option>
      </select>
    </FormGroup>

    <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <select name="luggages" value={bookingData.luggages} onChange={handleChange}>
        <option value="1 luggage">1 luggage</option>
        <option value="2 luggage">2 luggage</option>
        <option value="3 luggage">3 luggage</option>
        <option value="4 luggage">4 luggage</option>
        <option value="5+ luggage">5+ luggage</option>
      </select>
    </FormGroup>

    <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <input type="date" name="journeyDate" placeholder="Journey Date" value={bookingData.journeyDate} onChange={handleChange} />
    </FormGroup>

    <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <input type="time" name="journeyTime" placeholder="Journey Time" className="time__picker" value={bookingData.journeyTime} onChange={handleChange} />
    </FormGroup>

    <FormGroup>
      <textarea rows={5} type="textarea" name="notes" className="textarea" placeholder="Write" value={bookingData.notes} onChange={handleChange}></textarea>
    </FormGroup>

    <FormGroup>
      <button type="submit" className="btn btn-primary">Submit Booking</button>
    </FormGroup>
  </Form>
  );
};

export default BookingForm;
