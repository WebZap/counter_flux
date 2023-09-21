import React from "react";
import DisplayCount from "./components/DisplayCount/DisplayCount";
import ManageButtons from "./components/ManageButtons/ManageButtons";

function App(props) {
    let state = props.state;
    return (
        <div
            className="App"
            style={{
                margin: "0 auto",
                width: "200px",
                fontSize: "30px",
                marginTop: "100px",
            }}
        >
            <div className="outerwrapp">
                <div>REDUX COUNTER</div>
                <DisplayCount valueOfCount={state.valueOfCount} />
                <ManageButtons dispatch={props.dispatch} />
            </div>
        </div>
    );
}

export default App;
