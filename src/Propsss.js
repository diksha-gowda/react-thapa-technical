import React from 'react';

const Car = (props)=>{
    return <><h1>I am a {props.brand}</h1></>
};
const Propsss = () => {
    const carName = "Ford";
  return (
    <>
    <Car brand={carName}/>
    </>
  )
}
export default Propsss;