import React from 'react'
import { Field, Formik, Form } from 'formik';
import "./form.css"


const Reservations = () => {
  return (
    <div>
      <h1>Reserve Your Table</h1>
      <p>Book a table now to experience our culinary delighta</p>
      <Formik>
        <Form>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
          />
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
          />
          <label htmlFor="phone">Phone</label>
          <Field
            type="number"
            id="phone"
            name="phone"
            placeholder="Enter your Phone Number"
          />
          <label htmlFor="date">Date</label>
          <Field
            type="date"
            id="date"
            name="date"
          />
          <label htmlFor="guests">Number Of Guests</label>
          <Field
            type="number"
            id="guests"
            name="guests"
            placeholder="Number Of Guests"
          />
          <label htmlFor="specialrequests">Special Requests</label>
          <Field
            type="text"
            id="specialrequests"
            name="specialrequests"
            placeholder="Any special requests or Dietary requirements?"
          />
          <button>Confirm Reservations</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Reservations