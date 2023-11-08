import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAddContact,
  requestAllContacts,
  requestDeleteContact,
} from 'services/phonebookApi';

export const requestContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contactsData = await requestAllContacts();
      return contactsData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export const addContact = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkAPI) => {
    try {
      const contact = await requestAddContact(newContact);
      // console.log(contact);
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const delContact = await requestDeleteContact(id);
      console.log(delContact);
      return delContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
