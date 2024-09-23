import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
};

export default App
