import StatisticsItem from './StatisticsItem'
import Total from './Total'

const StatisticsList = ({ good, neutral, bad, total }) => (
  <div>
    <section>
      <h2>Statistics</h2>
      <ul>
        <StatisticsItem
          // state={this.state}
          good={good}
          neutral={neutral}
          bad={bad}
          // grades={grades}
        />
        <Total total={total} />
      </ul>
    </section>
  </div>
)

// class StatisticsList extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

//   // handleIncrement = (e) => {
//   //   const name = e.target.name
//   //   // console.log(e)
//   //   // console.log(e.target)
//   //   // console.log(e.target.name)
//   //   this.setState((prevState) => ({
//   //     [name]: prevState.[name] + 1,
//   //   }))
//   // }

//   render() {
//     const name = grades
//     console.log('name в классе', name)
//     console.log('grades in the class', grades[0])
//     // const s = this.state
//     // console.log(s)
//     // const { good, neutral, bad } = this.state
//     return (
//       <div>
//         {/* <section>
//           <h2>Please leave feedback</h2>
//           <Buttons onIncrement={this.handleIncrement }/>
//         </section> */}

//         <section>
//           <h2>Statistics</h2>
//           <ul>
//             {/* {this.props.grades.map(({ name }) => (
//               <StatisticsItem
//                 state={this.state}
//                 good={this.state.good}
//                 neutral={this.state.neutral}
//                 bad={this.state.bad}
//                 name={name}
//               />
//             ))} */}
//             <StatisticsItem
//               state={this.state}
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               grades={grades}
//             />
//           </ul>
//         </section>
//       </div>

//       // <section>
//       //   {this.props.title && <h2>{this.props.title}</h2>}
//       //   <ul>
//       //     {this.props.grades.map(({ name }) => (
//       //       <StatisticsItem />
//       //     ))}
//       //   </ul>
//       // </section>
//     )
//   }
// }

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

// StatisticsList.propTypes = {
//   title: PropTypes.string,
//   grades: PropTypes.array.isRequired,
// }
export default StatisticsList
