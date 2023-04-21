import React from "react";
import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const IMAGES = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg,
};

const HandIcon = ({ className, value }) => {
    const src = IMAGES[value];
    return (
        <div>
            <img className={className} src={src} alt={value} />
        </div>
    );
};

export default HandIcon;
