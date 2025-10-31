import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

// 🟢 Solid Buttons
export const ButtonSuccess = ({
  children,
  type = "button",
  onClick,
  className = "",
}: Props) => (
  <button
    className={`text-sm bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 font-semibold transition ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export const ButtonWarning = ({
  children,
  type = "button",
  onClick,
  className = "",
}: Props) => (
  <button
    className={`text-sm bg-yellow-500 text-black rounded-md py-2 px-4 hover:bg-yellow-600 font-semibold transition ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export const ButtonDanger = ({
  children,
  type = "button",
  onClick,
  className = "",
}: Props) => (
  <button
    className={`text-sm bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 font-semibold transition ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

// ⚪ Outline Buttons
export const ButtonSuccessOutline = ({
  children,
  type = "button",
  onClick,
  className = "",
}: Props) => (
  <button
    className={`text-sm border border-green-600 text-green-600 rounded-md py-2 px-4 hover:bg-green-600 hover:text-white font-semibold transition ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export const ButtonDangerOutline = ({
  children,
  type = "button",
  onClick,
  className = "",
}: Props) => (
  <button
    className={`text-sm border border-red-600 text-red-600 rounded-md py-2 px-4 hover:bg-red-600 hover:text-white font-semibold transition ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export const ButtonInfoOutline = ({
  children,
  type = "button",
  onClick,
  className = "",
}: Props) => (
  <button
    className={`text-sm border border-blue-600 text-blue-600 rounded-md py-2 px-4 hover:bg-blue-600 hover:text-white font-semibold transition ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);
