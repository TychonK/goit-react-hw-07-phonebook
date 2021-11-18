import './App.scss';
import { useEffect } from 'react';

import ListItems from './components/Contacts_List/ListItems'
import Form from './components/Form/Form'
import Filter from './components/Filter/Filter'

import { connect } from 'react-redux'
import * as actions from './redux/actions'

import axios from "axios"

function App({ contacts, filter, onLoad }) {

  useEffect(() => {
    axios
      .get('https://6196735baf46280017e7e0cd.mockapi.io/phonebook/contacts')
      .then(res => { return res.data })
      .catch(err => console.log(err))
      .then(data => onLoad(data))
    }, [])

    return (
      <div className="App">
        <Form existing={contacts}/>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter filter={filter}/>
        <ul>
          <ListItems arr={contacts} filter={filter} />
        </ul>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: (existingContacts) => dispatch(actions.pageLoaded(existingContacts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)