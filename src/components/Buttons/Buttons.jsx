import React from 'react'

const Buttons = ({ title, onClick }) => (
  <div>
    <section>
      {title && <h2>{title}</h2>}
      <div>
        <button type="button" name="good" onClick={onClick}>
          Good
        </button>
        <button type="button" name="neutral" onClick={onClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={onClick}>
          Bad
        </button>
      </div>
    </section>
  </div>
)

export default Buttons
