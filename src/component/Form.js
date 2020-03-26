import React, {Component} from "react";
import "../css/Form.css"

class Form extends Component {

    state = {
        email: '',
        pesel: '',

        errors : {
            email: false,
            pesel: false
        }
    };

    messages = {
        email_incorrect: 'Brak @ w emailu',
        pesel_incorrect: 'Pesel musi mieć 11 cyfr'
    };

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        if (type === "email" || type === "number") {
            const value = e.target.value;
            this.setState({
                [name]: value
            })
        }
    };

    handleBlur = (e) => {
        const name = e.target.name;
        const validation = this.formValidation();
        if (name === "email") {
            if (validation.email) {
                this.setState({
                    errors: {
                        email: false
                    }
                })
            } else {
                this.setState({
                    errors: {
                        email: !validation.email
                    }
                })
            }
        } else if (name === "pesel") {
            if (validation.pesel) {
                this.setState({
                    errors: {
                        pesel: false
                    }
                })
            } else {
                this.setState({
                    errors: {
                        pesel: !validation.pesel
                    }
                })
            }
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const validation = this.formValidation();
        if (validation.correct) {
            this.setState({
                email: '',
                pesel: '',
                message: 'Formularz został wysłany',

                errors: {
                    email: false,
                    pesel: false
                }
            })
        } else {
            this.setState({
                errors: {
                    email: !validation.email,
                    pesel: !validation.pesel
                }
            })
        }
    };

    formValidation() {
        let email = false;
        let pesel = false;
        let correct = false;

        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }

        if (this.state.pesel.length === 11) {
            pesel = true;
        }

        if (email && pesel) {
            correct = true
        }

        return ({
            email,
            pesel,
            correct
        })
    }

    componentDidUpdate() {
        console.log("update");
        if (this.state.message !== '') {
            setTimeout(() => this.setState({
                message: ''
            }), 3000)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="email">Email:
                    <input type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur}/>
                        {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
                    </label>
                    <label htmlFor="pesel">PESEL:
                    <input type="number" id="pesel" name="pesel" placeholder="Pesel" value={this.state.pesel} onChange={this.handleChange} onBlur={this.handleBlur}/>
                        {this.state.errors.pesel && <span>{this.messages.pesel_incorrect}</span>}
                    </label>
                    <button>Zapisz</button>
                </form>
                {this.state.message && <h3>{this.state.message}</h3>}
            </div>
        )
    }
}

export default Form;