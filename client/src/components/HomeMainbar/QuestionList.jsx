import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionList}) => {
  return (
    <>
      {
        questionList.map((question) =>(
          <Questions question={question} key={questionList.id} />
        ))
      }
    </>
  )
}

export default QuestionList
