import React from 'react'
import PropTypes from 'prop-types'
import '../styles/message.scss'

const Message = ({ message }) => (
  <div className='message'>
    <span>{message}</span>
  </div>
)

Message.propTypes = {
  /**
   * Message
   */
  message: PropTypes.string.isRequired
}

export default Message