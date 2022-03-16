import React from "react";

interface Props {
  text: string;
  className?: string;
}

export const FormHelperText = ({ text, className = "" }: Props) => {
  return <span className={className}>{text}</span>;
};
