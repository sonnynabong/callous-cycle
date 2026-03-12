import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-black uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color-1]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[color-2] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 duration-200",
  {
    variants: {
      variant: {
        default: "rounded-full bg-gradient-to-r from-[#FF3AF2] via-[#7B2FFF] to-[#00F5D4] text-white border-4 border-[#FFE600] shadow-[0_0_20px_rgba(255,58,242,0.5),8px_8px_0_#FFE600] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,58,242,0.7),12px_12px_0_#FFE600] bg-[length:200%_auto] hover:bg-right",
        destructive: "rounded-full bg-destructive text-destructive-foreground border-4 border-[#00F5D4] shadow-[4px_4px_0_#00F5D4] hover:shadow-[8px_8px_0_#00F5D4] hover:-translate-y-1",
        outline: "rounded-full border-4 border-max-magenta bg-max-muted/50 text-white shadow-[8px_8px_0_#FFE600,16px_16px_0_#00F5D4] hover:translate-x-2 hover:translate-y-2 hover:shadow-none",
        secondary: "rounded-full border-4 border-dashed border-max-cyan bg-transparent text-max-cyan hover:bg-max-cyan hover:text-[#0D0D1A] hover:border-solid hover:scale-105",
        ghost: "hover:bg-max-magenta/20 hover:text-max-magenta hover:scale-105 underline decoration-max-cyan decoration-4 underline-offset-4",
        link: "text-max-yellow underline-offset-4 hover:underline decoration-max-magenta decoration-4 hover:scale-105",
      },
      size: {
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
