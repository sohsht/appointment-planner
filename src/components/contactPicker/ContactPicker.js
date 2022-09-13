import React from "react";

export const ContactPicker = ({
  name,
  contacts,
  onChange
}) => {

  return (
    <select onChange={onChange}>
      <option selected="selected" key={-1} value={""}>No Contact Selected</option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};

export default ContactPicker;
