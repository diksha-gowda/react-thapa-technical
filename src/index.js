import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render('kya dikhana hai(JSX element)', 'kaha dikhana hai', 'callback function');  //render() shows
// kya dikhana hai needs react module
// kaha dikhana hai needs react-dom module

const name = "Diksha Gowda";


ReactDOM.render( 
<>
<h1><i>My name is {name}</i></h1>
<p>my lucky no is {2+3}</p>
<p>my lucky no is {Math.random()}</p>
{/* <p>Using statement inside curly braces will give errore {
    if( 3<4 ){
        console.log(true);
        } else{
        console.log(false);
        }
}</p> */}
</>,document.getElementById('root'));

// use javascript inside html
// only expressions can be used inside {} , not statements