import React from 'react';

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                username: '',
                email: '',
                password: '',
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        event.preventDefault();
        switch(event.target.type) {
            case 'text':
                break;
            case '':
                break;
            default:
                break;
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            newUser: {
                username: event.username.value,
                email: event.email.value,
                password: event.password.value
            }
        })
    }

    render() {
        return (
            <div className="signUpForm">
                <form>
                    <input
                     className="signUpUsername"
                     name="username"
                     type="text"
                     onChange={this.handleInputChange}
                    />
                    <input
                     className="signUpEmail"
                     name="email"
                     type="text"
                     onChange={this.handleInputChange}
                    />
                    <input
                     className="signUpPassword"
                     name="password"
                     type="text"
                     onChange={this.handleInputChange}
                    />
                    <button
                     className="signUpSubmitBtn"
                     name="submitBtn"
                     type="submit"
                     onClick={this.handleSubmit}
                    />
                </form>
            </div>
        )
    }
}