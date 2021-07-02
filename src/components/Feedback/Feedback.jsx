import GradesBtn from '../GradesBtn/GradesBtn'

const Feedback = ({ grades }) => (
  <section>
    <h1>Please leave feedback</h1>
    <ul>
      {grades.map((grade) => (
        <li>
          <GradesBtn grade={grade.name} />
        </li>
      ))}
    </ul>
  </section>
)

export default Feedback
