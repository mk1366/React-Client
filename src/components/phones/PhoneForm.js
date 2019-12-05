import React from 'react'
import { Link } from 'react-router-dom'

const PhoneForm = ({ model, state, company, description, price, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Model</label>
    <input
      placeholder=""
      defaultValue={model}
      name="model"
      onChange={handleChange}

    />
    <label>State</label>
    <input
      placeholder=""
      defaultValue={state}
      name="state"
      onChange={handleChange}
    />

    <label>Company</label>
    <input
      placeholder=""
      defaultValue={company}
      name="company"
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder=""
      defaultValue={description}
      name="description"
      onChange={handleChange}
    />

    <label>Price</label>
    <input
      placeholder=""
      defaultValue={price}
      name="price"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default PhoneForm
