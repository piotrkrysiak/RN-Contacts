import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import contacts from './reducers/contacts';
import authInitialState from './initialsStates/authInitialState';
import contactInitialState from './initialsStates/contactInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispach] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispach] = useReducer(
    contacts,
    contactInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, authDispach, contactsState, contactsDispach}}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
