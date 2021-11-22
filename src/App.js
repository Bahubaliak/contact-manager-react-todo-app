import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList"
import { uuid } from 'uuidv4';

function App() {

  const [contactsArray, setContactArray] = useState([])

const handleRemove = (id) => {
  console.log(id)
  const newContactList = contactsArray.filter((contact) => {
    return contact.id !== id
  })
  console.log(newContactList)
  setContactArray(newContactList)
}

const handleAddContact = (contact) => {
  setContactArray([...contactsArray, {id: uuid(), ...contact}])
}

useEffect( () => {
  var retriveContact = JSON.parse(localStorage.getItem("contacts"))
  if(retriveContact) setContactArray(retriveContact)
},[]);

useEffect( () => {
  localStorage.setItem("contacts",JSON.stringify(contactsArray))
},[contactsArray]);

  return (
    <div className="App Container bg-light ml-3">
      <Header />
      <ContactForm addContact={handleAddContact}/>
      <ContactList contacts={contactsArray} getContactId={handleRemove}/>
    </div>
  );
}

export default App;
