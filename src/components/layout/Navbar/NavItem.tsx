import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  path: string;
  title: string;
  desc?: string;
};

const NavItem = ({ icon, path, title, desc }: Props) => {
  return (
    <a href={path} className="mb-4 flex items-start gap-3.5">
      {React.createElement(icon, { className: "mt-1 h-7 w-7 text-primary" })}
      <div className="flex-1">
        <h5 className="font-bold">{title}</h5>
        {desc && <p className="m-0 mt-1 text-sm leading-relaxed">{desc}</p>}
      </div>
    </a>
  );
};

const NavSmallItem = ({ icon, path, title }: Props) => {
  return (
    <a href={path} className="mb-4 flex items-start gap-3.5">
      {React.createElement(icon, { className: "h-7 w-7 text-primary" })}
      <div className="flex-1">
        <h5>{title}</h5>
      </div>
    </a>
  );
};

export { NavItem, NavSmallItem };
