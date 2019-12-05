import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class Phones extends Component {
  constructor (props) {
    super(props)

    this.state = {
      phones: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/movies`)
      .then(res => this.setState({ phones: res.data.phones }))
      .catch(console.error)
  }

  render () {
    console.log(this.state.phones)

    const phones = this.state.phones.map(phones => (
      <li key={phones.id}>
        <Link to={`/phones/${phones.id}`}>{phones.title}</Link>
      </li>
    ))

    return (
      <Fragment>
        <h4>phones</h4>
        <Link to="/create-phone"> Create a Phone</Link>
        <ul>
          {phones}
        </ul>
      </Fragment>
    )
  }
}

export default Phones
