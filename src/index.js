import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
console.log(Sdata[0]);


ReactDOM.render(
    <>
        <Card imgSrc={Sdata[0].imgscr} title={Sdata[0].title} seriesName={Sdata[0].sname} link={Sdata[0].links} />
        <Card imgSrc={Sdata[1].imgscr} title={Sdata[1].title} seriesName={Sdata[1].sname} link={Sdata[1].links} />
        <Card imgSrc={Sdata[2].imgscr} title={Sdata[2].title} seriesName={Sdata[2].sname} link={Sdata[2].links} />
        <Card imgSrc={Sdata[3].imgscr} title={Sdata[3].title} seriesName={Sdata[3].sname} link={Sdata[3].links} />
        <Card imgSrc={Sdata[4].imgscr} title={Sdata[4].title} seriesName={Sdata[4].sname} link={Sdata[4].links} />
    </>,
    document.getElementById("root")
);