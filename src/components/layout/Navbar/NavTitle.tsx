interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const NavTitle = ({ children, ...props }: Props) => {
  return (
    <h4
      className="my-4 text-sm font-bold uppercase tracking-widest text-gray-400"
      {...props}
    >
      {children}
    </h4>
  );
};

export default NavTitle;
