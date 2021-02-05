import { connect } from "react-redux";
import * as contactActions from "../redux/contacts/contactAction";
import ContactForm from "./ContactForm";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(contactActions.addContactArray(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
