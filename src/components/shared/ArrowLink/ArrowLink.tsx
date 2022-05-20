interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const ArrowLink = ({ children, ...props }: Props) => {
  return (
    <a
      className="my-6 block font-medium text-sky-600 after:inline-block after:translate-x-1.5 after:translate-y-[-0.08em] after:scale-y-150 after:transition-all after:duration-300 after:content-['>'] hover:after:translate-x-2"
      {...props}
    >
      {children}
    </a>
  );
};

export default ArrowLink;
