import React from "react";

function DisplayCount(props) {
    return (
        <div className="display-amount" style={{ marginBottom: "20px" }}>
            {props.valueOfCount.value}
        </div>
    );
}

export default DisplayCount;
