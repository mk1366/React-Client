import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

import PhoneForm from './PhoneForm'

class PhoneUpdate extends Component {
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

  componentDidMount () {
    axios(`${apiUrl}/phones/${this.props.match.params.id}`)
      .then(res => this.setState({ phone: res.data.phone }))
      .catch(console.error)
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const updatedPhone = Object.assign(this.state.phone, updatedField)

    this.setState({ phones: updatedPhone })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/movies/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { movie: this.state.phones }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { phone, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/phones/${this.props.match.params.id}`} />
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

export default withRouter(PhoneUpdate)
