import React, { useState } from "react";
import "./Child.css";

function Child(props) {
  const [count, updateCount] = useState(0);

  function click() {
    props.boxClicked(props.id);
    updateCount(count + 1);
  }

  return (
    <div className="ChildBox">
      <h3>BOX {props.id}</h3>
      <div className="ClickHere" onClick={click}>
        Click Here
      </div>
      <p>
        Counter {props.id} : 
        <br /> 
        <span>{count}</span>
      </p>
      <br />
      <p>
        Brothers' summatory :
        <br />
        <span className="span2">{props.sumaCount}</span>
      </p>
    </div>
  );
}

export default Child;
