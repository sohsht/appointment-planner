import React, { useState, useEffect } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

export const ContactsPage = ({
  contacts,
  addContact
}) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello")
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicate) {
    addContact(name, phone, email);

   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if (contacts.includes(name)) {
      setDuplicate(true);
    }
  }, [contacts, name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objects={contacts} />
      </section>
    </div>
  );
};
