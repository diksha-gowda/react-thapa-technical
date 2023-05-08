import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Result from './Result';
// console.log(Result[0]);

ReactDOM.render(
    <>
        <Card imgSrc={Result[0].poster_path} title={Result[0].title} seriesName={Result[0].original_title} link={Result[0].media_type} />
        <Card imgSrc={Result[1].poster_path} title={Result[1].title} seriesName={Result[1].original_title} link={Result[1].media_type} />
        <Card imgSrc={Result[2].poster_path} title={Result[2].title} seriesName={Result[2].original_title} link={Result[2].media_type} />
        <Card imgSrc={Result[3].poster_path} title={Result[3].title} seriesName={Result[3].original_title} link={Result[3].media_type} />
        <Card imgSrc={Result[4].poster_path} title={Result[4].title} seriesName={Result[4].original_title} link={Result[4].media_type} />
    </>,
    document.getElementById("root")
);