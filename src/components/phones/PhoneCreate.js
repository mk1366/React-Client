import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

import PhoneForm from './PhoneForm'

class PhoneCreate extends Component {
  constructor () {
    super()

    this.state = {
      model: '',
      state: '',
      company: '',
      description: '',
      price: '',
      createdId: null,
      phone: null
    }
  }

    handleChange = event => this.setState({
      [event.target.name]: event.target.value
    })

  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/phones`,
      method: 'post',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        phone: {
          model: this.state.model,
          state: this.state.state,
          company: this.state.company,
          description: this.state.description,
          price: this.state.price
        }
      }
    })
      .then(response => this.setState({
        createdId: response.data.phone._id
      }))
      .catch(console.error)
  }

  render () {
    const { createdId } = this.state
    if (createdId) {
      return <Redirect to={`/phones/${createdId}`} />
    }
    return (
      <Fragment>
        <h1>Create!</h1>
        <PhoneForm
          model={this.state.model}
          state={this.state.state}
          company={this.state.company}
          description={this.state.description}
          price={this.state.price}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          cancelPath={'/phones'}
        />
      </Fragment>
    )
  }
}

export default withRouter(PhoneCreate)

// resetForm = () => this.setState({
//   phone: '',
//   model: '',
//   state: '',
//   company: '',
//   description: '',
//   price: ''
// })
