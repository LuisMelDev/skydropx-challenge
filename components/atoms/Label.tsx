import React from "react";

interface Props {
  text: string;
  htmlFor: string;
  className?: string;
}

export const Label = ({ htmlFor, text, className = "" }: Props) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {text}
    </label>
  );
};
