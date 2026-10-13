import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[0.75rem] font-medium uppercase tracking-[0.16em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-forest text-ivory hover:bg-forest-dark",
        secondary: "border border-ivory/70 bg-transparent text-ivory hover:bg-ivory/10",
        outline: "border border-ink/20 bg-transparent text-ink hover:bg-forest-light",
        ghost: "text-moss hover:bg-forest-light hover:text-ink",
        sand: "bg-sand text-ink hover:bg-sand-light",
        link: "rounded-none text-forest-fg underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 px-5 text-[0.68rem]",
        lg: "h-12 px-8",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
