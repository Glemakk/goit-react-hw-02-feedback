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

  countTotalFeedback = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.name)
    const name = e.target.name
    this.setState((prevState) => ({
      [name]: (prevState[name] += prevState[name]),
    }))
  }

  // onClick = () => {
  //   return(
  //   handleIncrement()
  //   countTotalFeedback())
  // }

  render() {
    return (
      <Container>
        <Buttons
          title="Please leave feedback"
          // onIncrement={this.handleIncrement}
          onClick={this.handleIncrement}
        />
        <StatisticsList
          title="Statistics"
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.good + this.state.neutral + this.state.bad}
        />
      </Container>
    )
  }
}

export default App
