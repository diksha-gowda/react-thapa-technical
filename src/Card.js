import React from "react";
import ReactDOM from "react-dom";
import "./card.css";

const srcImg = "https://wallpapercave.com/wp/wp1917154.jpg";

function Card(props) {
  // console.log(props);     //will return everything as an object
  return (
    <div className="col-4">
      <div className="cards">
        <div className="card">
          <img src={srcImg} alt="myPic" className="card__img" />
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.original_title}</h3>
            <a href={props.link} target="_blank">
              <button> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
