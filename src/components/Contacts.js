import React from 'react';
import Contact from "../Images/1.png"
function Contacts(props) {

    const {contact} = props
    return (
        <div className="container mb-3  pb-2">
            <div  className="item mb-3 text-left d-flex justify-content-start">
                <div className="me-4"><img src={Contact} alt="contact-icon"/></div>
                <div className="me-5">
                    Email: {contact.email}&nbsp;&nbsp;
                    Phone: {contact.mobile}
                </div>
                <div className="">
                <button onClick={()=> props.RemoveContact(contact.id)} className="btn btn-danger">
                <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                </div>
                
            </div>          
        </div>
    );
}

export default Contacts;