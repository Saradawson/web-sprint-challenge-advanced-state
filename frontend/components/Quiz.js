import React, { useEffect } from 'react';
import { fetchQuiz, selectAnswer } from '../state/action-creators';
import { connect } from 'react-redux';

function Quiz(props) {

  useEffect(() => {
    props.fetchQuiz();
    
  }, [])

  const onAnswer = (evt) => {
    console.log()
    props.selectAnswer(evt.target.id)
  }

  console.log(props.quiz.answers && props.quiz.answers[0])
  


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {props.quiz.answers && props.quiz.answers[0].text}
                <button id={props.quiz.answers && props.quiz.answers[0].answer_id} onClick={onAnswer}>
                  {props.quiz.answers && props.quiz.answers[0].answer_id === props.selectedAnswer ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className="answer">
                {props.quiz.answers && props.quiz.answers[1].text}
                <button id={props.quiz.answers && props.quiz.answers[1].answer_id} onClick={onAnswer}>
                {props.quiz.answers && props.quiz.answers[1].answer_id === props.selectedAnswer ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return{
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
    
  }
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer})(Quiz);


