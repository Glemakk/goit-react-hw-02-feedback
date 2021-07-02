import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import StatisticsItem from './StatisticsItem'

class StatisticsList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }))
  }

  handleIncrementNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }))
  }

  handleIncrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }))
  }

  // handleDecrement = () => {
  //   this.setState((prevState) => ({
  //     good: prevState.value - 1,
  //   }))
  // }

  render() {
    const s = this.state
    console.log(s)
    // const { good, neutral, bad } = this.state
    return (
      <div>
        <section>
          <h2>Please leave feedback</h2>
          <div>
            {/* {this.props.grades.map(({ name }) => (
              <button key={name} type="button" onClick={this.handleIncrement}>
                {name}
              </button>
            ))} */}
            <button type="button" onClick={this.handleIncrementGood}>
              Good
            </button>
            <button type="button" onClick={this.handleIncrementNeutral}>
              Neutral
            </button>
            <button type="button" onClick={this.handleIncrementBad}>
              Bad
            </button>
          </div>
        </section>
        <section>
          <h2>Statistics</h2>
          <ul>
            {/* <li>
              {s.map((ss) => (
                <p>
                  Goog: <span>{[ss]}</span>
                </p>
              ))}
            </li> */}
            <li>
              <p>
                Goog: <span>{this.state.good}</span>
              </p>
            </li>
            <li>
              <p>
                Neutral: <span>{this.state.neutral}</span>
              </p>
            </li>
            <li>
              <p>
                Bad: <span>{this.state.bad}</span>
              </p>
            </li>

            {/* <StatisticsItem good={this.grades} /> */}
          </ul>
        </section>
      </div>

      // <section>
      //   {this.props.title && <h2>{this.props.title}</h2>}
      //   <ul>
      //     {this.props.grades.map(({ name }) => (
      //       <StatisticsItem />
      //     ))}
      //   </ul>
      // </section>
    )
  }
}

// const StatisticsList = ({ grades, title }) => (
//   <section>
//     {title && <h2>{title}</h2>}
//     <ul>
//       {grades.map((grade) => (
//         <li>
//           <StatisticsItem grade={grade.name} />
//         </li>
//       ))}
//     </ul>
//   </section>
// )

StatisticsList.propTypes = {
  title: PropTypes.string,
  grades: PropTypes.array.isRequired,
}
export default StatisticsList
