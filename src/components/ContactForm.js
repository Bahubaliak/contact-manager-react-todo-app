import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            mobile: "",
        };
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.email === "" || this.state.mobile === "" ) {
            alert("All fields are mandatory!")
        }else {
            this.props.addContact(this.state)
            this.setState({
                email: "",
                mobile: ""
            })
        }
    }

    render(){
        return (
            <div className="container mt-3">
                <form onSubmit = {this.handleSubmit}>
                    <div className="mb-3 col-sm-4">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control border-2 border-dark" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            value={this.state.email}
                            onChange={(e)=> this.setState({email:  e.target.value})}
                        />
                    </div>
    
                    <div className="mb-3 col-sm-4">
                        <label for="numberinput" className="form-label">Number</label>
                        <input 
                            type="text" 
                            className="form-control border-2 border-dark" 
                            id="number"
                            value={this.state.mobile}
                            onChange={(e)=> this.setState({mobile:  e.target.value})}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">Submit</button>
                </form>            
            </div>
        );
    }
}

export default ContactForm;