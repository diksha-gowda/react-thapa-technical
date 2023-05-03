import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render('kya dikhana hai(JSX element)', 'kaha dikhana hai', 'callback function');  //render() shows
// kya dikhana hai needs react module
// kaha dikhana hai needs react-dom module

ReactDOM.render( 
<>
<h1>Hello World!!</h1>
<p>Plz like and share</p>
<h2>plz subscribe</h2>
</>,document.getElementById('root'));

// // Using React Fragment to get rid of extra node
//     ways:-
//     1.<React.Fragment></React.Fragment>
//     2.<></>