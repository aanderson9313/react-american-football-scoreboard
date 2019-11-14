import React, {useState} from "react";
import "./App.css"; 

const BottomRow = () => {
  let [quarter, quarterTitle] = useState(1);
  let [down, downTitle] = useState(1);

  const quarterNumber = event => {
   if (quarter < 4) {
     quarterTitle( quarter + 1 )
  } else {quarterTitle(1)
  };
  };
  const downNumber = event => {
    if (down < 4) {
      downTitle( down + 1 )}
      else{downTitle(1)};
  };

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <div className = "downButton">
             <button className = "down_button" onClick = {downNumber}>Change Down</button>
        </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <div className = "quarterButton">
          <button className = "quarter_button" onClick = {quarterNumber}>Change Quarter</button>
        </div>
      </div>
    
    </div>
  );
}

export default BottomRow;