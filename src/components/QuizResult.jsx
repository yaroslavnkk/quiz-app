import quizCompleteImage from '../assets/quiz-complete.png'
export default function QuizResult(){
    return <div id='summary'>
        <img src={quizCompleteImage} alt= 'Quiz complete image'/>
        <h2>Congrats! You completed the quiz</h2>
    </div>
}