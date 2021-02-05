import React from "react";
import styles from "./contactForm.module.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Alert from "../alert/Alert";
import { connect } from "react-redux";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    isVisible: false,
  };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  onNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };
  onHandleClick = () => {
    const isUnique = !this.props.contacts.some((item) =>
      item.name.includes(this.state.name)
    );

    console.log(isUnique);

    if (isUnique) {
      const addContact = {
        id: uuidv4(),
        name: this.state.name,
        number: this.state.number,
      };
      this.props.onAddContact(addContact);
    } else {
      setTimeout(() => this.setState({ isVisible: false }), 3000);
      this.setState({ isVisible: true });
    }
  };

  render() {
    console.log(this.props);
    return (
      <>
        <Alert isVisible={this.state.isVisible} />
        <p>Name</p>
        <input
          placeholder="Name"
          id="name"
          type="text"
          onChange={this.onNameChange}
        ></input>
        <p>Number</p>
        <input
          placeholder="Number"
          id="number"
          onChange={this.onNumberChange}
        ></input>
        <br></br>
        <button
          type="button"
          onClick={this.onHandleClick}
          className={styles.button}
        >
          Add contacts
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(ContactForm);
