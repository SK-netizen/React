import React from 'react';
import ReactDOM from 'react-dom/client'
import { ConuterApp } from './CounterApp';
import { App } from './FirstApp'
import { SecondApp } from './SecondApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ConuterApp  value={'asdf'} ></ConuterApp>
    </React.StrictMode>
)