import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

ReactDOM.render(
    <>
        <Card imgSrc="https://wallpapercave.com/wp/wp4056410.jpg" title="Original Series" seriesName="Grey's Anatomy" link="https://www.netflix.com/in/title/80990668?source=35" />
        <Card imgSrc="https://wallpapercave.com/wp/wp4056410.jpg" title="Original Series" seriesName="himym" link="https://www.netflix.com/in/title/80990668?source=35" />
        <Card imgSrc="https://wallpapercave.com/wp/wp4056410.jpg" title="Original Series" seriesName="Friends" link="https://www.netflix.com/in/title/80990668?source=35" />
        <Card imgSrc="https://wallpapercave.com/wp/wp4056410.jpg" title="Original Series" seriesName="TVD" link="https://www.netflix.com/in/title/80990668?source=35" />
    </>,
    document.getElementById("root")
);