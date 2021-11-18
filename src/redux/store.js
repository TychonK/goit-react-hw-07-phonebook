// import { createStore } from 'redux';
import { configureStore, createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'

const initialState = { contacts: [], filter: '' }

const reducer = createReducer(initialState, {
    [actions.addContact]: (state, action) => {
        return {
            ...state,
            contacts: [...state.contacts, action.payload]
        };
    },
    [actions.deleteContact]: (state, action) => {
        const contactsList = state.contacts.filter(contact => contact.name !== action.payload.target.id);
            return {
                ...state,
                contacts: contactsList
        };
    },
    [actions.filter]: (state, action) => {
        return {
                ...state,
                filter: action.payload.target.value
        };
    },
    [actions.pageLoaded]: (state, action) => {
        return {
            ...state,
            contacts: action.payload
        };
    }

})

// const reducer = (state = initialState, action) => {
//     console.log(action)
//     switch (action.type) {
//         case 'form/addContact':
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload]
//             };

//         case 'form/deleteContact':
//             const contactsList = state.contacts.filter(contact => contact.name !== action.payload.target.id);
//             return {
//                 ...state,
//                 contacts: contactsList
//             };
        
//         case 'filter/changeFilter':
//             return {
//                 ...state,
//                 filter: action.payload.target.value
//             };
        
//         case 'page/pageLoaded':
//             return {
//                 ...state,
//                 contacts: action.payload
//             }
        
//         default:
//             return state;
//     }
// };

// const store = createStore(reducer, composeWithDevTools());

const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV === "development",
})

export default store;