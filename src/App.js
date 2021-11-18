import './App.scss';
import { useEffect } from 'react';

import ListItems from './components/Contacts_List/ListItems'
import Form from './components/Form/Form'
import Filter from './components/Filter/Filter'

import { connect } from 'react-redux'
import * as actions from './redux/actions'

function App({ contacts, filter, onLoad }) {

  useEffect(() => {
        if (localStorage.getItem("contacts")) {
            onLoad(JSON.parse(localStorage.getItem("contacts")))
        }
    }, [])

  useEffect(() => {
     localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

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