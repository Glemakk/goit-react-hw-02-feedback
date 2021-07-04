import PropTypes from 'prop-types'

const Total = ({ total, good, neutral, bad }) => {
  const s = { total }
  console.log('TOTAL', s)
  return (
    <>
      <li>
        <p>
          Total: <span>{total}</span>
        </p>
      </li>
    </>
  )
}
Total.propTypes = {
  total: PropTypes.number.isRequired,
}

export default Total
