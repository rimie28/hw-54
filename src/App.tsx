import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from "./Board.tsx";

const createItems = () => {
    const items = [];
    for (let i = 0; i < 36; i++) {
        items.push({hasItem: false, clicked: false})
    };
    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex].hasItem = true;
    return items;
};

const App = () => {
    const [items, setItems] = useState(createItems());
    const [tries, setTries] = useState(0);

    const clickOnItem = (index) => {
            if(items[index].clicked) {
                return;
            }
            const newState = [...items];
            newState[index] = {...newState[index], clicked: true};
            setItems(newState);

            setTries(tries + 1);
            }


    const reset = () => {
        setItems(createItems());
        setTries(0);
    };

    return (
        <div className="App">
            <Board items={items} clickOnItem={clickOnItem}/>
            <p>Tries: {tries}</p>
            <button onClick={reset}>Reset</button>
        </div>
    )
};

export default App
