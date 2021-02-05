import React, { Component } from "react";
import ContactList from "../contactList/contactList/ContactList";
import Alert from "../alert/Alert";
import styles from "./phonebook.module.css";
import { CSSTransition } from "react-transition-group";
import ContactFormCont from "../contactForm/ContactFormCont";
import FilterCont from "../filter/FilterCont";

export default class Phonebook extends Component {
  state = {
    // contacts: [
    //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    // ],
    // filter: "",
    // name: "",
    // number: "",
    isVisible: false,
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts !== null) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  // onDeleteContact = (contactId) => {
  //   this.setState((prevState) => {
  //     return {
  //       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
  //     };
  //   });
  // };

  // onChangeFilter = (e) => {
  //   this.setState({ filter: e.target.value });
  // };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  // onNameChange = (e) => {
  //   this.setState({ name: e.target.value });
  // };
  // onNumberChange = (e) => {
  //   this.setState({ number: e.target.value });
  // };

  // addContact = {
  //   id: uuidv4(),
  //   name: this.state.name,
  //   number: this.state.number,
  // };

  // const isUnique = !contacts.addContactArray
  //   .map((contact) => contact.name)
  //   .includes(addContact.name);

  // console.log(isUnique);

  // if (isUnique) {
  //   // addContactArray();
  //   contacts.addContactArray(this.state, addContact);
  //   // this.setState((prevState) => {
  //   //   return {
  //   //     contacts: [...prevState.contacts, addContact],
  //   //   };
  //   // });
  // } else {
  //   // alert(addContact.name + " is already in contacts!");
  //   this.setState({ isVisible: true });
  // }
  // };

  render() {
    // const { filter } = this.state;
    // const VisibleContacts = this.getVisibleContacts();
    // console.log(this.addContact);
    // console.log(this.state.name);

    return (
      // <div className={(styles.phonebook, styles.text)}>
      // <CSSTransition
      //   in={true}
      //   timeout={500}
      //   classNames={styles}
      //   appear={true}
      // >
      //   <h1>Phonebook</h1>
      // </CSSTransition>

      //   <ContactForm
      //     onHandleClick={this.onAddContact}
      //     onNameChange={this.onNameChange}
      //     onNumberChange={this.onNumberChange}
      //   />

      //   <Alert isVisible={this.state.isVisible} />
      //   <h2>Contacts</h2>
      //   <CSSTransition
      //     in={this.state.contacts.length > 1}
      //     timeout={250}
      //     classNames={styles}
      //     unmountOnExit
      //   >
      //     <Filter value={filter} onChangeFilter={this.onChangeFilter} />
      //   </CSSTransition>

      //   <ContactList
      //     contacts={VisibleContacts}
      //     onDeleteContact={this.onDeleteContact}
      //   />
      // </div>

      <>
        <CSSTransition
          in={true}
          timeout={500}
          classNames={styles}
          appear={true}
        >
          <h1>Phonebook</h1>
        </CSSTransition>

        <Alert isVisible={this.state.isVisible} />

        <ContactFormCont />
        <h2>Contacts</h2>

        <FilterCont />
        <ContactList />
      </>
    );
  }
}
