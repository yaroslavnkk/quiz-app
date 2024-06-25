import {useState, useCallback} from 'react';
import QuizResult from "./QuizResult.jsx";
import Timer from "./Timer.jsx";
import QUESTIONS from "../questions.js";
export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState('');
    const activeQuestionId = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const handleSelectAnswer = useCallback(function handleSelectAnswer(userAnswer){
        setUserAnswers(prevAnswers => [...prevAnswers, userAnswer]);
        setAnswerState('answered');
        if(userAnswer !== null){
        setTimeout(() => {
            if(userAnswer === QUESTIONS[activeQuestionId].answers[0]){
                setAnswerState('correct');
            }else{
                setAnswerState('wrong');
            }
            setTimeout(() => {
                setAnswerState('');
            }, 1000);
        }, 1000);
        }else{
            setAnswerState('');
        }
    }, [activeQuestionId]);
    const isGameOver = activeQuestionId === QUESTIONS.length - 1;
    const handleSkipAnswer = useCallback(() => { handleSelectAnswer(null) }, [handleSelectAnswer]);
    return ( isGameOver ? <QuizResult /> :
    <div id="quiz">
        <div id="question">
            <Timer key={activeQuestionId} timeout={5000} onTimeout={handleSkipAnswer}/>
            <h2>{QUESTIONS[activeQuestionId].text}</h2>
            <ul id="answers">
                {QUESTIONS[activeQuestionId].answers.map((answer) => {
                    let buttonClass;
                    const isSelected = userAnswers[userAnswers.length - 1] === answer;
                    if (answerState === 'answered' && isSelected) {
                        buttonClass = 'selected';
                    }
                    if ((answerState === 'wrong' || answerState === 'correct') && isSelected) {
                        buttonClass = answerState;
                    }
                    return (
                        <li key={answer} className="answer">
                            <button className={buttonClass} onClick={() => handleSelectAnswer(answer)}
                                    key={answer}>{answer}</button>
                        </li>)
                })
                }
            </ul>
        </div>
    </div>
)};