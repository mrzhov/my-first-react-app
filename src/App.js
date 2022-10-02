import './App.css';
import {useEffect, useState} from "react";
import Footer from "./components/Footer/Footer";

function App() {
    const [name, setName] = useState('Maxim');
    const [surname, setSurname] = useState('Ivanov');
    const [showFooter, setShowFooter] = useState(true);

    useEffect(() => {
        console.log('check mount');
    }, []);

    useEffect(() => {
        console.log('name or surname did updated');
    }, [name, surname]);

    const changeName = () => {
        const answer = prompt('Enter the name:');
        setName(prev => answer === null ? prev : answer);
    }

    const changeSurname = () => {
        const answer = prompt('Enter the surname:');
        setSurname(prev => answer === null ? prev : answer);
    }

    const removeFooter = () => {
        setShowFooter(false);
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>Hello, {name} {surname}!</p>
                <button onClick={changeName}>Change name</button>
                <button onClick={changeSurname}>Change surname</button>
                <button onClick={removeFooter}>Remove Footer</button>
            </header>
            {showFooter && <Footer />}
        </div>
    );
}

export default App;
