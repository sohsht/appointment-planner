import React from "react";

import ContactPicker from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
      <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} required min={getTodayString}></input>
      <input type="time" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} required></input>
      <ContactPicker name="contact" value={contact} contacts={getContactNames()} onChange={(e) => setContact(e.target.value)}/>
      <button type="submit" value="Add Appointment">Submit</button>
    </form>
  );
};

export default AppointmentForm;
