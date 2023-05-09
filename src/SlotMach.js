import React from "react";
import ReactDOM from "react-dom";

const SlotM = (props) =>{
    // let x = '😄';
    // let y = '😄';
    // let z = '🎅';
  
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
         // OR
    let {x, y, z} = props;
  
    if ( (x===y) && (y===z) ){
      return(
        <>
          <div className='slot_inner'>
            <h1>{x}{y}{z}</h1>
            <h1>Matching!!!</h1>
            <hr />
          </div>
        </>
      )
    } else {
      return(
      <>
      <div className='slot_inner'>
        <h1>{x}{y}{z}</h1>
        <h1>Not Matching!!!</h1>
        <hr />
      </div>
    </>)
    }
  }

const SlotMatch = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}>Slot machine game</span> 🎰
      </h1>
      <div className="slotmachine">
        <SlotM x="😃" y="😃" z="😃" />
        <SlotM x="😃" y="😅" z="🙃" />
        <SlotM x="😃" y="😃" z="😃" />
        <SlotM x="🙂" y="🤐" z="😎" />
      </div>
    </>
  );
};
export default SlotMatch;
