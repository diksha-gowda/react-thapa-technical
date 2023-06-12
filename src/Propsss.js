import React from 'react';

const Car = (props)=>{
    return <><h1>I am a {props.brand}</h1></>
};
const Propsss = () => {
  return (
    <>
    <Car brand="Ford" />
    </>
  )
}
export default Propsss;