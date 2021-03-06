import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../reducers'

export const User = ({ user }) => (
  <div>
    <h2>{ user ? user.username : 'Not Found'}</h2>
  </div>
)

const VisibleUser = connect(
  (state, { params }) => ({ user: getUser(state, parseInt(params.userId)) })
)(User)

export default VisibleUser
