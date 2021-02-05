import { createReducer } from "@reduxjs/toolkit";
import { addContactArray, removeContact, addFilter } from "./contactAction";

export const contacts = createReducer([], {
  [addContactArray]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

export const filter = createReducer("", {
  [addFilter]: (state, actions) => actions.payload,
});
