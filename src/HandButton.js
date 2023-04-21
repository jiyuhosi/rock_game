import React from "react";
import HandIcon from "./HandIcon";
import "./HandButton.css";

function HandButton({ className, value, onClick }) {
    const handleClick = () => onClick(value);

    return (
        <button className="HandButton" onClick={handleClick}>
            <HandIcon className="HandButton-icon" value={value}></HandIcon>
        </button>
    );
}

export default HandButton;
