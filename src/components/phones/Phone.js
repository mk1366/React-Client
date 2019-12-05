import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class Phone extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      phone: {}
    }
  }

  componentDidMount () {
    axios({
      method: 'GET',
      url: `${apiUrl}/phones/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(responseData => this.setState({ phone: responseData.data.phone }))
      .catch(console.error)
  }

  render () {
    console.log(this.state.phone)

    return (
      <React.Fragment>
        <ul>
          <li>Company: {this.state.phone.company}</li>
          <li>Model: {this.state.phone.model}</li>
          <li>Description: {this.state.phone.description}</li>
          <li>Price: {this.state.phone.price}</li>
          <li><Link to={`/update-phone/${this.state.phone._id}`}> Update a Phone</Link></li>
        </ul>
      </React.Fragment>
    )
  }
}

// const Phone = ({ user, alerts, match }) => {
//   const [phone, setPhone] = useState()
//
//   useEffect(() => {
//     axios({
//       method: 'GET',
//       url: `${apiUrl}/phones/${match.params.id}`,
//       headers: {
//         'Authorization': `Token token=${user.token}`
//       }
//     })
//       .then(responseData => setPerform(responseData.data.performance))
//       .catch(console.error)
//   }, [])

export default withRouter(Phone)
