import { Component } from 'react'
import Container from './components/Container/Container'
import Feedback from './components/Feedback/Feedback'
import StatisticsList from './components/Statistics/StatisticsList'

import grades from './data/grades.json'

class App extends Component {
  render() {
    return (
      <Container>
        {/* <Feedback grades={grades} /> */}
        <StatisticsList title="Statistics" grades={grades} />
      </Container>
    )
  }
}

export default App
