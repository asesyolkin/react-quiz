import React from 'react';
import classes from './FinishedQuiz.css'
// import Quiz from '../../containers/Quiz/Quiz';

const FinishedQuiz = props => {
  let numbRightAnswers = 0

  for (let key in props.results) {
    if (props.results[key] === 'success') numbRightAnswers++
  }

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        { props.quiz.map((answer, index) => {
          const questionClasses = []

          if (props.results[answer.id - 1] === 'success') {
            questionClasses.push('fa fa-check')
            questionClasses.push(classes.success)
          } else {
            questionClasses.push('fa fa-times')
            questionClasses.push(classes.error)
          }

          return (
            <li key={index}>
              <strong>{answer.id}. </strong>
              {answer.question}
              <i className={questionClasses.join(' ')} />
            </li>
          )
        }) }
      </ul>

      <p>Правильно {numbRightAnswers} из {props.quiz.length}</p>

      <div>
        <button onClick={() => props.repeat()}>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz