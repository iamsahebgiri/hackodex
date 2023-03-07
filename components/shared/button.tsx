import { classNames } from "@/lib/classnames";
import * as React from "react";
import { Icon } from "@iconify/react";
import spinnerIos20Filled from "@iconify/icons-fluent/spinner-ios-20-filled";

export type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  responsive?: boolean;
  isLoading?: boolean;
  loadingChildren?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

export function buttonClasses({
  className,
  variant = "primary",
  isLoading,
  disabled,
}: ButtonProps) {
  return classNames(
    "inline-flex items-center justify-center font-semibold transition-colors rounded-lg focus-ring px-3 py-2",
    variant === "primary" &&
      "border-transparent text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
    variant === "primary" && !isLoading && "hover:bg-gray-700",
    variant === "secondary" && "border-gray-300 text-gray-700 bg-white ",
    variant === "secondary" && !isLoading && "hover:bg-gray-50",
    (disabled || isLoading) && "opacity-50 cursor-default",
    className,
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      responsive,
      type = "button",
      isLoading = false,
      loadingChildren,
      disabled,
      children,
      ...rest
    },
    forwardedRef,
  ) => {
    return (
      <button
        {...rest}
        ref={forwardedRef}
        type={type}
        disabled={disabled || isLoading}
        className={buttonClasses({
          className,
          disabled,
          variant,
          responsive,
          isLoading,
        })}
      >
        {isLoading && (
          <Icon
            icon={spinnerIos20Filled}
            className="mr-2 -ml-1 h-4 w-4 animate-spin"
          />
        )}
        {isLoading && loadingChildren ? loadingChildren : children}
      </button>
    );
  },
);

Button.displayName = "Button";
