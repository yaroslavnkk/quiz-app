import Header from './components/Header';
import {useState} from 'react';
function App() {
    const[isStartPressed, setIsStartPressed] = useState(false);
    function handleButtonClick(){
        setIsStartPressed(true);
    }
    return <>
        <Header />
        <div className="starter">
            {isStartPressed ? <h1>Game Started</h1> : <button className='button-start' onClick={handleButtonClick}>Start</button>}
        </div>

    </>
}

export default App;
