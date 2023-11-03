import React from "react";

const Button = ({ varient, color, borderColor, className, children, ...restProps }) => {
  const varients = {
    rounded: "rounded-full",
    primary: 'rounded-lg',
  };

  const borderVarients = {
    blue: "border-2 border-blue",
  };

  const colorVariants = {
    white: 'bg-white',
    blue: 'bg-blue'
  }

  return (
    <button
      type="button"
      {...restProps}
      className={`${varients[varient]} ${borderVarients[borderColor]} ${colorVariants[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
