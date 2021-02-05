import React from "react";
import styles from "./contactForm.module.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  onNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };
  onHandleClick = () => {
    const addContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(addContact);
  };

  render() {
    console.log(this.props);
    return (
      <>
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
