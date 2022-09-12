import React from "react";

export const ContactPicker = ({
  contacts,
  onChange
}) => {

  const contactList = contacts.map((contact) => {
    return <option key={contact.key} value={contact.name}>{contact.name}</option>
  })
  return (
    <select onChange={onChange}>
      <option selected="selected" key="default" value="default">No Contact Selected</option>
      {contactList}
    </select>
  );
};

export default ContactPicker;
