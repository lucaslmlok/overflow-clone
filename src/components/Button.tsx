type variant = "text" | "contained" | "outlined";
type size = "small" | "medium" | "large";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variant;
  size?: size;
}

const getVariantClass = (variant: variant) => {
  switch (variant) {
    case "contained":
      return "bg-primary text-white hover:bg-blue-700";
    case "outlined":
      return "ring-primary text-primary hover:ring-2";
    default:
      return "";
  }
};

const getSizeClass = (size: size) => {
  switch (size) {
    case "small":
      return "px-4 py-3";
    case "large":
      return "px-5 py-5";
    default:
      return "px-4 py-4";
  }
};

const Button = ({
  variant = "text",
  size = "medium",
  className,
  children,
  ...props
}: Props) => {
  const variantClass = getVariantClass(variant);
  const sizeClass = getSizeClass(size);

  return (
    <button
      className={`cursor-pointer rounded-md border border-primary font-medium transition duration-300 ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
