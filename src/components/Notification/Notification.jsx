import React from 'react'

function Notification({ count, message }) {
  return <div>{count === 0 && message}</div>
}

export default Notification
