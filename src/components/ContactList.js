import React from 'react';
import Contacts from './Contacts';
function ContactList(props) {
    console.log("props",props)

    const handleRemoveContact = (id) => {
        props.getContactId(id)
    }

    return (
        <div className="mb-3">
            <h4 className="container text-left">Contact Lists</h4>
            {props.contacts.map((contact) => <Contacts RemoveContact={handleRemoveContact} key={1} contact={contact}/>)}     
        </div>

    );
}

export default ContactList;