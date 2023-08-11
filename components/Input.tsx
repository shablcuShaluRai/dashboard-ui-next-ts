import clsx from "clsx";
import React from "react";

interface IInput {
  className: string;
}

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function Input({ className, ...props }: IInput): JSX.Element {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
        className
      )}
      {...props}
    />
  );
}
