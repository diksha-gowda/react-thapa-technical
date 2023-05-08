import React from 'react';
import ReactDOM from 'react-dom';
import './card.css';

function Card(props){
    // console.log(props);     //will return everything as an object
    return(
    <div className='cards'>
        <div className='card'>
            <img src={props.poster_path} alt='myPic' className='card__img' />
            <div className='card__info'>
                <span className='card__category'>{props.title}</span>
                <h3 className='card__title'>{props.original_title}</h3>
                <a href={props.media_type} target='_blank'>
                    <button> Watch Now</button>
                </a>
            </div>
        </div>
    </div>)
}

export default Card;