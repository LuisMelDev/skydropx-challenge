import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface Props {
  placeholder?: string;
  onChange?: ChangeEventHandler;
  className?: string;
  id: string;
  type: HTMLInputTypeAttribute;
  value: any;
  name?: string;
}

export const Input = ({
  placeholder = "",
  onChange,
  id,
  className = "",
  type,
  value = "",
  name = "",
}: Props) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      type={type}
      value={value}
      name={name}
    />
  );
};
