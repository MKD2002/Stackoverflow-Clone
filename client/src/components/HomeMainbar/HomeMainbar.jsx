import React from 'react'
import './HomeMainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  var questionList = [{
    id: 1,
    votes: 2,
    noOfAnswer: 3,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "reactjs", "nodejs"],
    userPosted: "user1",
    askedOn: "aug 15"
  }, {
    id: 2,
    votes: 2,
    noOfAnswer: 3,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "reactjs", "nodejs"],
    userPosted: "user1",
    askedOn: "aug 15"
  }, {
    id: 3,
    votes: 5,
    noOfAnswer: 3,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["next.js", "reactjs", "nodejs"],
    userPosted: "user1",
    askedOn: "aug 15"
  }]

  const location = useLocation();
  const user = 1;

  const navigate = useNavigate();


  const checkAuth = () => {
    if (user === null) {
      alert('Please login to ask a question');
      navigate('/Auth');
    }else{
      navigate('/AskQuestions')
    }
  }

  return (
    <div className="main-bar">
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {
          questionList === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionList.length} quetions</p>
              <QuestionList questionList={questionList} />
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
