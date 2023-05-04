import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './Heading.js';

const fname = "Diksha";
const lname = "Gowda";
const bleh = "blah blah blah";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://picsum.photos";

// const varname = {
//     key: 'value',
//     key: 'value'
// }

const heading = {
    color: "#663399",
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "bold",
    textShadow: "0 2px 4px #ffe9c5",
    margin: "70px 0",
    fontFamily: '"Josefin Sans", sans-serif'
}
ReactDOM.render(
<>
<h1 style={heading}><i>{bleh}</i></h1>
<Heading />
<div className="row">
    <div className="col-4">
    <img src={img1} alt="random-image" />
    </div>
    <div className="col-4">
    <img src={img2} alt="random-image" />
    </div>
    <div className="col-4">
    <a href={links} target="_blank"><img src={img3} alt="random-image" /></a>
    </div>
</div>
</>,document.getElementById('root'));