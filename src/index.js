import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render('kya dikhana hai(JSX element)', 'kaha dikhana hai', 'callback function');  //render() shows
// kya dikhana hai needs react module
// kaha dikhana hai needs react-dom module

const fname = "Diksha";
const lname = "Gowda";

// Using Template Literals (backticks (`))
console.log(`my name is ${fname}`);

ReactDOM.render( 
<>
<h1><i>My name is {fname + "" + lname}</i></h1>
<h1><i>My name is {fname} {lname}</i></h1>
<p><i>Using template literals :-
{`my name is ${fname} ${lname} and my lucky no is ${5+5}`}
</i></p>
</>,document.getElementById('root'));