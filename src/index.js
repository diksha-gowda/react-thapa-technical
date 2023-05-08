import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Result from './Result';

// Using normal function
function ncard(val) {
    console.log(val);
    return(<Card imgSrc={val.poster_path} title={val.title} seriesName={val.original_title} link={val.media_type} />);
}

ReactDOM.render(
    <>
        <h1 className='heading_style'><b><i>bleh bleh bleh</i></b></h1>
       { Result.map(ncard)}
    </>,
    document.getElementById("root")
);