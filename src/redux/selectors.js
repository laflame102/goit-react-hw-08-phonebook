import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.filter;

export const selectContacts = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectSearchingContact = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
