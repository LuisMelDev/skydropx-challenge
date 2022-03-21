import React, { ButtonHTMLAttributes } from "react";

export const Button = ({
    children,
    type = "button",
    onChange,
    className,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button type={type} onChange={onChange} className={className}>
            {children}
        </button>
    );
};
