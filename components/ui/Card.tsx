import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "text-white",
        "border-transparent",
        "my-5",
        "mx-10",
        "min-w-96",
        "rounded-3xl"
      ],
      secondary: [
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
    temp: {
      low: [
        'bg-blue-400',
        "hover:bg-blue-600",
      ],
      medium: [
        'bg-orange-400',
        "hover:bg-orange-600",
      ],
      high: [
        'bg-red-400',
        "hover:bg-red-600",
      ] 
    }
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  temp,
  ...props
}) => <button className={button({ intent, size, temp, className })} {...props} />;
