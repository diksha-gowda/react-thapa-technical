import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Result from "./Result";

ReactDOM.render(
    <>
        <h1 className="heading_style">
            <b>
                <i>bleh bleh bleh</i>
            </b>
        </h1>
        {/* // Using fat arrow function */}
        {Result.map((val) => {
            return (
                <div className="row">
                    <Card
                        imgSrc={val.poster_path}
                        title={val.title}
                        seriesName={val.original_title}
                        link={val.links}
                    />
                </div>
            );
        })}
    </>,
    document.getElementById("root")
);
