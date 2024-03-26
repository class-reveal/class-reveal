import "./Button.css";
import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  expanded?: boolean;
  style?: React.CSSProperties;
};

const Button = React.forwardRef<HTMLDivElement, ButtonProps>(
  ({ children, onClick, style }, ref) => {
    return (
      <div ref={ref} style={style} onClick={onClick} className="btn">
        {children}
      </div>
    );
  }
);

export default Button;
