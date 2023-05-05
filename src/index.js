import React from 'react';
import ReactDOM from 'react-dom';
import youtuber, {favprog, myName, myNames} from './App';

ReactDOM.render(
    <>
        <ol>
            <li>Thapa</li>
            <li>{youtuber}</li>
            <li>{favprog}</li>
            <li>{myName()}</li>
            <li>{myNames()}</li>
        </ol>
    </>,
    document.getElementById("root")
);