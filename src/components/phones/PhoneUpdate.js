import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

import PhoneForm from './PhoneForm'

class PhoneUpdate extends Component {
  constructor () {
    super()

    this.state = {
      phone: {
        model: '',
        state: '',
        company: '',
        description: '',
        price: '',
        updated: null
      }
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/phones/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ phone: res.data.phone }))
      .catch(console.error)
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const updatedPhone = Object.assign(this.state.phone, updatedField)

    this.setState({ phone: updatedPhone })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/phones/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: { phone: this.state.phone }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/phones/${this.props.match.params.id}`} />
    }

    return (
      <Fragment>
        <h1>Create!</h1>
        <PhoneForm
          model={this.state.phone.model}
          state={this.state.phone.state}
          company={this.state.phone.company}
          description={this.state.phone.description}
          price={this.state.phone.price}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          cancelPath={'/phones'}
        />
      </Fragment>
    )
  }
}

export default withRouter(PhoneUpdate)
