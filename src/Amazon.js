import React from 'react'
import Result from './Result';
import Card from './Card';

const Amazon = ()=>{
    return(
        <div className="row">
        <Card
          key={Result[0].id}
          imgSrc={Result[0].poster_path}
          title={Result[0].title}
          seriesName={Result[0].original_title}
          link={Result[0].links}
        />
        {console.log(Result[1])}
      </div>
    );
}

export default Amazon;