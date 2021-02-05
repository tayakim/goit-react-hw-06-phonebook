import { connect } from "react-redux";
import * as contactActions from "../redux/contacts/contactAction";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (string) => dispatch(contactActions.addFilter(string)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
