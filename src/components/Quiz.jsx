import {useState} from 'react';
import QUESTIONS from "../questions.js";
export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionId = userAnswers.length;
    function handleSelectAnswer(userAnswer){
        setUserAnswers(prevAnswers => [...prevAnswers, userAnswer]);
    }
    return <div id="quiz">
        <div id="question">
            <h2>{QUESTIONS[activeQuestionId].text}</h2>
            <ul id="answers">
                    {QUESTIONS[activeQuestionId].answers.map((answer) =>
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)} key={answer}>{answer}</button>
                        </li>)}
            </ul>
        </div>
    </div>
}