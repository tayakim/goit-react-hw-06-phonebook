import { createAction } from "@reduxjs/toolkit";

export const addContactArray = createAction("type/ADD_CONTACT");
export const removeContact = createAction("type/REMOVE_CONTACT");
export const addFilter = createAction("type/ADD_FILTER");
