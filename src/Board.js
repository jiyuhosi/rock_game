import React from "react";
import DiceIcon from "./DiceIcon";

const totalScoreStyle = {
    marginBottom: "10px",
};

const recordStyle = {
    marginBottom: "10px",
};

function Board({ className, name, score, totalScore, scoreHistory }) {
    return (
        <div className={className}>
            <div style={{ marginBottom: "10px" }}>{name}</div>
            <DiceIcon className={name} value={score} />
            <div style={totalScoreStyle}>
                <div style={{ marginBottom: "10px" }}>totalScore</div>
                {totalScore}
            </div>
            <div style={recordStyle}>
                <div style={{ marginBottom: "10px" }}>scoreHistory</div>
                {scoreHistory.join(", ")}
            </div>
        </div>
    );
}

export default Board;
