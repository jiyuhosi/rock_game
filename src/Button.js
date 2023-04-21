import React from "react";
import icReset from "./assets/ic-reset.svg";

function Button({ className, children, onClick }) {
    return <img className={className} src={icReset} onClick={onClick} alt="return" />;
}

export default Button;
