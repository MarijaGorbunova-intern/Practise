import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ClassicButton({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-500 transition"
      {...props}>
      {children}
    </button>
  );
}