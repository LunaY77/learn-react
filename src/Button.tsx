import React from "react";
import "./Button.css";

export type ButtonProps = {
    text: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger"; // 增加样式变体
};

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    variant = "secondary", // 默认为次要按钮
}) => {
    return (
        <button className={`btn btn-${variant}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
