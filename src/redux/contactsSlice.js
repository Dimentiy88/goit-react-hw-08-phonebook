import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, requestContacts, deleteContact } from './thunks';

const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    onFilterChange: (state, action) => {
      state.filter = action.payload;
    },
  },

  // ! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  extraReducers: builder =>
    builder
      .addCase(requestContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })

      // ! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = [action.payload, ...state.contacts.items];
      })

      // ! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })

      .addMatcher(
        isAnyOf(
          requestContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          requestContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
export const { onFilterChange } = contactsSlice.actions;
