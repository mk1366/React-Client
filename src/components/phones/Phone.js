import React, { useState, useEffect } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'


const Perform = ({ user, alerts, match }) => {
  const [phone, setPhone] = useState()

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/performances/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setPerform(responseData.data.performance))
      .catch(console.error)
  }, [])

export default withRouter(phone)
