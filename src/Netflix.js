import React from 'react'
import Result from './Result';
import Card from './Card';
const Netflix = ()=>{
    return(
        <div className="row">
        <Card
          key={Result[1].id}
          imgSrc={Result[1].poster_path}
          title={Result[1].title}
          seriesName={Result[1].original_title}
          link={Result[1].links}
        />
        {console.log(Result[1])}
      </div>
    );
}
export default Netflix;