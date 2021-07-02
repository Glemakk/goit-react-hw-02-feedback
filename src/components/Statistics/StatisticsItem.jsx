const StatisticsItem = ({ good, neutral, bad }) => (
  //   <li key={1}>
  //     <p>{good}:</p>
  //   </li>
  <div>
    <li>
      <p>
        Goog: <span>{good}</span>
      </p>
    </li>
    <li>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
    </li>
    <li>
      <p>
        Bad: <span>{bad}</span>
      </p>
    </li>
  </div>
)
export default StatisticsItem
