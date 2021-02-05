// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contacts, filter } from "./contacts/contactsReducer";

const store = configureStore({
  reducer: {
    contacts,
    filter,
  },
});

export default store;
