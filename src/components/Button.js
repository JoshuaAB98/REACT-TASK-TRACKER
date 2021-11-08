import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ color, text, onClick }) => {
    return <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue',
  }

PropTypes.defaultProps = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button