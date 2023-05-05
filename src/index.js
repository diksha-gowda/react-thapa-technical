import React from 'react';
import ReactDOM from 'react-dom';
import * as ques from './App';

ReactDOM.render(
    <>
        <ol>
            <li>Thapa</li>
            <li>{ques.default}</li>
            <li>{ques.favprog}</li>
            <li>{ques.myName()}</li>
            <li>{ques.myNames()}</li>
        </ol>
    </>,
    document.getElementById("root")
);