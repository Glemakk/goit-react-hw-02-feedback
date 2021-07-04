import { Component } from 'react'
import Container from './components/Container/Container'
import StatisticsList from './components/Statistics/StatisticsList'
import Buttons from './components/Buttons/Buttons'

// import grades from './data/grades.json'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleIncrement = (e) => {
    const name = e.target.name
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.name)
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    const sum = [good, neutral, bad]
    return sum.reduce((total, sum) => total + sum, 0)
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    // console.log('good внутри PositiveFeedbackPercentage', good)
    const sum = this.countTotalFeedback()
    // console.log('sum внутри PositiveFeedbackPercentage', sum)
    return sum === 0 ? 0 : Math.round((good / sum) * 100)
    // return posPrct.split()
  }
  //.split('.')[0]

  // countTotalFeedback = (e) => {
  //   console.log(e)
  //   console.log(e.target)
  //   console.log(e.target.name)
  //   const name = e.target.name
  //   this.setState((prevState) => ({
  //     [name]: (prevState[name] += prevState[name]),
  //   }))
  // }

  // onClick = () => {
  //   return(
  //   handleIncrement()
  //   countTotalFeedback())
  // }

  render() {
    console.log('РАБОТАЕТ?', this.countPositiveFeedbackPercentage())
    // console.log('f===>>', this.f())
    const { good, neutral, bad } = this.state
    // const countTotalFeedback = good + neutral + bad
    console.log('TOTAL in console==>', this.countTotalFeedback())

    return (
      <Container>
        <Buttons
          title="Please leave feedback"
          // onIncrement={this.handleIncrement}
          onClick={this.handleIncrement}
        />
        <StatisticsList
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    )
  }
}

export default App
