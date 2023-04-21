const HANDS = ["rock", "scissor", "paper"];

const WINS = {
    rock: "scissor",
    scissor: "paper",
    paper: "rock",
};

// 勝負結果
export function compareHand(a, b) {
    if (WINS[a] === b) return 1;
    if (WINS[b] === a) return -1;
    return 0;
}

function random(n) {
    return Math.floor(Math.random() * n);
}

//相手のじゃんけん
export function generateRandomHand() {
    const idx = random(HANDS.length);
    return HANDS[idx];
}
