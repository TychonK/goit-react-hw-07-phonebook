import { createAction } from '@reduxjs/toolkit'

// const addContact = (value) => ({
//     type: 'form/addContact',
//     payload: value,
// })

// const deleteContact = (value) => ({
//     type: 'form/deleteContact',
//     payload: value,
// })

// const filter = (value) => ({
//     type: 'filter/changeFilter',
//     payload: value,
// })

// const pageLoaded = (value) => ({
//     type: 'page/pageLoaded',
//     payload: value,
// })

export const addContact = createAction('form/addContact')
export const deleteContact = createAction('form/deleteContact')
export const filter = createAction('filter/changeFilter')
export const pageLoaded = createAction('page/pageLoaded')