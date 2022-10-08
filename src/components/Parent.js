import React, { useState } from "react";
import Child from "./childs/Index";
import "../App.css";

function Parent() {
  const [count, updateCount] = useState(0);
  const [count1, updateCount1] = useState(0);
  const [count2, updateCount2] = useState(0);
  const [count3, updateCount3] = useState(0);

  function boxClicked(childId) {
    updateCount(count + 1);

    if (childId === 1 || childId === 3) {
      updateCount2(count2 + 1);
    }
    if (childId === 1 || childId === 2) {
      updateCount3(count3 + 1);
    }
    if (childId === 3 || childId === 2) {
      updateCount1(count1 + 1);
    }
  }

  return (
    <div>
      <div className="ChildsContainer">
        <Child id={1} boxClicked={boxClicked} sumaCount={count1} />
        <Child id={2} boxClicked={boxClicked} sumaCount={count2} />
        <Child id={3} boxClicked={boxClicked} sumaCount={count3} />
      </div>
      <div className="ParentContainer">
        <h2>Parent</h2>
        <p>
          Total counter :<span>{count}</span>
        </p>
      </div>
    </div>
  );
}

export default Parent;
