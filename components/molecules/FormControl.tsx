import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { FormHelperText, Input, Label } from "..";

interface Props {
  labelText: string;
  idInput: string;
  value: any;
  onChange: ChangeEventHandler;
  typeInput: HTMLInputTypeAttribute;
  placeholder?: string;
  textError: string;
  nameInput?: string;
  size?: "full" | "50";
}

export const FormControl = ({
  labelText,
  idInput,
  value,
  onChange,
  typeInput,
  placeholder = "",
  textError = "",
  nameInput = "",
  size = "full",
}: Props) => {
  return (
    <div className={`${size === "full" ? "full block" : "w-5/12 inline-block"} mb-3`}>
      <Label
        htmlFor={idInput}
        text={labelText}
        className="text-sm font-light block"
      />
      <Input
        id={idInput}
        value={value}
        onChange={onChange}
        type={typeInput}
        placeholder={placeholder}
        name={nameInput}
        className="bg-slate-200 outline-none focus:bg-slate-50 focus:shadow font-normal h-10 rounded-lg py-1 px-2 text-md block w-full"
      />
      <FormHelperText text={textError} />
    </div>
  );
};
