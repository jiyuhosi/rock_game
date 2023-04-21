import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand } from "./utils";
import "./style/App.css";

// 初期じゃんけん値
const INITIAL_VALUE = "rock";

//  勝負結果
const getResult = (me, other) => {
    const comparison = compareHand(me, other);
    if (comparison > 0) return "win";
    if (comparison < 0) return "lose";
    return "draw";
};

// 全体
function App() {
    // 初期 state
    // 私のじゃんけん
    const [hand, setHand] = useState(INITIAL_VALUE);
    // あいてにじゃんけん
    const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
    // ゲーム履歴
    const [gameHistory, setGameHistory] = useState([]);
    // my score
    const [myScore, setMyScore] = useState(0);
    // 相手のスコア
    const [otherScore, setOtherScore] = useState(0);
    // draw
    const [draw, setDraw] = useState(0);
    // bet数
    const [bet, setBet] = useState(1);

    // reset
    const handleClearClick = () => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        setGameHistory([]);
        setMyScore(0);
        setOtherScore(0);
        setDraw(0);
        setBet(1);
    };

    //　各ボタンクリックしイベント
    const hadleButtonClick = (nextHand) => {
        const nextOtherHand = generateRandomHand();

        const nextHistoryItem = getResult(nextHand, nextOtherHand);

        const comparison = compareHand(nextHand, nextOtherHand);

        setHand(nextHand);

        setOtherHand(nextOtherHand);

        setGameHistory([...gameHistory, nextHistoryItem]);

        if (comparison > 0) setMyScore(myScore + bet);
        if (comparison < 0) setOtherScore(otherScore + bet);
        if (comparison === 0) setDraw(draw + 1);
    };

    // bet数制限
    const handleBetChange = (e) => {
        let num = Number(e.target.value);
        if (num > 9) num %= 10;
        if (num < 1) num = 1;
        num = Math.floor(num);
        setBet(num);
    };

    return (
        <div className="App">
            <Button className="App-reset" onClick={handleClearClick}></Button>
            <div className="Box">
                <div class="App-scores">
                    <div className="Score">
                        <div class="Score-num">{myScore}</div>
                        <div class="Score-name">my</div>
                    </div>
                    <div class="App-versus">:</div>
                    <div className="Score">
                        <div class="Score-num">{otherScore}</div>
                        <div class="Score-name">other</div>
                    </div>
                </div>
                <div class="App-hands">
                    <div class="Hand">
                        <HandIcon value={hand} />
                    </div>
                    <div class="App-versus">VS</div>
                    <div class="Hand">
                        <HandIcon value={otherHand} />
                    </div>
                </div>
                <div class="App-bet">
                    <span>Bet</span> <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input> <span>times</span>
                </div>
                <div className="App-history">
                    <h2>score recode</h2> {gameHistory.join(", ")}
                </div>
            </div>
            <div>
                <HandButton value="rock" onClick={hadleButtonClick}></HandButton>
                <HandButton value="scissor" onClick={hadleButtonClick}></HandButton>
                <HandButton value="paper" onClick={hadleButtonClick}></HandButton>
            </div>
        </div>
    );
}

export default App;
