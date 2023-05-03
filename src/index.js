//required modules usinfg ES6 syntax
import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render('kya dikhana hai(JSX element)', 'kaha dikhana hai', 'callback function');  //render() shows
// kya dikhana hai needs react module
// kaha dikhana hai needs react-dom module

// ReactDOM.render( <h1>Hello World!!</h1>, document.getElementById('root'));

// Babel is a javascript compiler

// JSX is javascript exts

{/* <h1></h1> */}
// jsx expression in react

// // React module is imported to use JSX

//     // this is how it is rendered by Babel
//         import { jsx as _jsx } from "react/jsx-runtime";
//         ReactDOM.render( /*#__PURE__*/_jsx("h1", {
//         children: "Hello World!!"
//         }), document.getElementById('root'));

// to create a html element using pure javascript
var h1 = document.createElement("h1");
h1.innerHTMl = "Thapa Technical";
document.getElementById("root").appendChild(h1);