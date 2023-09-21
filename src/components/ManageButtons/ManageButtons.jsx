import React from "react";
import { ActionCreator } from "../../redux/actions/update_value";

const ManageButtons = ({ dispatch }) => {
    const incrementValue = () => {
        dispatch(ActionCreator.updateValueOfCounterINCREMENT());
    };
    const decrementValue = () => {
        dispatch(ActionCreator.updateValueOfCounterDECREMENT());
    };

    return (
        <div
            className="inner-wrapp"
            style={{ display: "flex", flexDirection: "column" }}
        >
            <div onClick={incrementValue} className="increment">
                Increment
            </div>
            <div onClick={decrementValue} className="decrement">
                Decrement
            </div>
        </div>
    );
};

export default ManageButtons;
