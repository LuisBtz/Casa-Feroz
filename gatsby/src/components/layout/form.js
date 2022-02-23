import React from 'react';
import styled from 'styled-components';
import addToMailchimp from "gatsby-plugin-mailchimp"


// markup
class Form extends React.Component {

  constructor() {
    super()
    this.state = {
      showButton: true,
      message: "Suscríbete a nuestro newsletter para recibir ofertas exclusivas de Feroz. Sólo para mayores de 18 años.",
      name: "",
      lastName: "",
      email: "",
      result: null,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    this.setState(() => ({ showButton: false }));
}


  handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
      LNAME: this.state.lastName,
    }) // listFields are optional if you are only capturing the email address.
      .then(data => {

        this.setState({ message: data.msg })
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
    this.setState({ email: "", name: "", lastName: "" })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }
  handleLastNameChange = event => {
    this.setState({ lastName: event.target.value })
  }




  

  render() {

    return (

<FormContainer>
              <h2>SE PARTE DE CASA FEROZ</h2>
              <p>{this.state.message}</p>
              <form className="subscribe" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    name="NAME"
                    id="mce-FNAME"
                    className="subscribe-fname"
                    placeholder="Nombre"
                    required
                />
                <input 
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    name="LASTNAME"
                    id="mce-LNAME"
                    className="subscribe-lname"
                    placeholder="Apellido"
                    required
                />
                <input 
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    name="EMAIL"
                    id="mce-EMAIL"
                    className="subscribe-email"
                    placeholder="EMAIL"
                    required
                />
                <button className="btn_sent" type="submit">ENVIAR →</button>
                <div className='checkbox'>
                  <input type="checkbox" name="my-checkbox" id="opt-in" />
                  <label for="opt-in">Sí, doy mi consentimiento para que Casa Feroz utilice mi información personal para proporcionarme información de productos y marketing por correo electrónico, y he leído y acepto las Condiciones de uso y la Política de privacidad de Casa Feroz.</label>
                </div>

              </form>
            </FormContainer>

    )
  }
}

const FormContainer = styled.div`
  margin-top: 50px;
  color: var(--beige);
  h2 {
    margin-bottom: 10px;
  }
  form {
    margin-top: 50px;
    input {
      display: block;
      width: 100%;
      padding: 10px 15px;
      background-color: white;
      color: var(--black);
      border: none;
      outline: none;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    button {
      color: var(--beige);
      margin-top: 10px;
      border: solid 2px var(--beige);
      width: 100%;
      padding: 5px 10px;
    }
    .checkbox {
      margin-top: 20px;
      text-align: left;
      display: flex;
      input {
        display: inline;
        width: auto;
        text-align: left !important;
        margin-right: 15px;
      }
      label {
        text-align: left !important;
      }
    }
  }
`

export default Form