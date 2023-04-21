import React from "react";
import diceBlue1Img from "./assets/dice-blue-1.svg";
import diceBlue2Img from "./assets/dice-blue-2.svg";
import diceBlue3Img from "./assets/dice-blue-3.svg";
import diceBlue4Img from "./assets/dice-blue-4.svg";
import diceBlue5Img from "./assets/dice-blue-5.svg";
import diceBlue6Img from "./assets/dice-blue-6.svg";

import diceRed1Img from "./assets/dice-red-1.svg";
import diceRed2Img from "./assets/dice-red-2.svg";
import diceRed3Img from "./assets/dice-red-3.svg";
import diceRed4Img from "./assets/dice-red-4.svg";
import diceRed5Img from "./assets/dice-red-5.svg";
import diceRed6Img from "./assets/dice-red-6.svg";

const MYDICEIMAGES = {
    1: diceBlue1Img,
    2: diceBlue2Img,
    3: diceBlue3Img,
    4: diceBlue4Img,
    5: diceBlue5Img,
    6: diceBlue6Img,
};

const OTHERDICEIMAGES = {
    1: diceRed1Img,
    2: diceRed2Img,
    3: diceRed3Img,
    4: diceRed4Img,
    5: diceRed5Img,
    6: diceRed6Img,
};

function DiceIcon({ className, value }) {
    const mySrc = MYDICEIMAGES[value];
    const otherSrc = OTHERDICEIMAGES[value];
    const src = className === "myDice" ? mySrc : otherSrc;

    return <img className={className} src={src} alt={value} />;
}

export default DiceIcon;
