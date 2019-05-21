import React from 'react'

class RegisterForm extends React.Component {

    constructor() {
        super();
        this.handleFormData = this.handleFormData.bind(this);
    }

    handleFormData(event) {
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);

        fetch('http://localhost:4000/accounts/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.get("name"),
                username: data.get("username"),
                password: data.get("password")
            })
        });


    }

    render() {
        return(
            <form className="form-width-full" onSubmit={this.handleFormData}>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" name="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputUserName1">User name</label>
                    <input type="text" name="username" className="form-control" id="exampleInputUserName1" aria-describedby="userNameHelp" placeholder="Enter your user name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default RegisterForm
