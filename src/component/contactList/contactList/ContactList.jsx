import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./contactsList.module.css";
import { connect } from "react-redux";
import * as contactActions from "../../redux/contacts/contactAction";

const ContactList = ({ contacts, onDeleteContact }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {contacts.map(({ name, number, id }) => (
      <CSSTransition key={id} timeout={250} classNames={styles}>
        <li className={styles.item}>
          {name}: {number}
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

const mapStateToProps = (state) => ({
  contacts: state.contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(state.filter.toLocaleLowerCase())
  ),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactActions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
