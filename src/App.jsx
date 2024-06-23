import Header from './components/Header';
import {useState} from 'react';
import Quiz from './components/Quiz';
function App() {
    const[isStartPressed, setIsStartPressed] = useState(false);
    function handleButtonClick(){
        setIsStartPressed(true);
    }
    return <>
        <Header />
        <main className='starter'>
            {isStartPressed ? <Quiz/> : <button className='button-start' onClick={handleButtonClick}>Start</button>}
        </main>

    </>
}

export default App;
