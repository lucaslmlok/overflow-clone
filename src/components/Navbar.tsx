import React, { useState, useEffect, useRef } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { IconType } from "react-icons";
import {
  HiOutlineMenuAlt3,
  HiOutlinePresentationChartBar,
} from "react-icons/hi";
import { TiFlowChildren, TiFlowSwitch, TiFlowMerge } from "react-icons/ti";
import { VscGroupByRefType, VscMortarBoard } from "react-icons/vsc";
import { MdSupportAgent } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { BiLaptop } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

import { ReactComponent as Logo } from "../assets/logo.svg";
import Button from "./Button";

type NavItemProps = {
  icon: IconType;
  path: string;
  title: string;
  desc?: string;
};

const NavItem = ({ icon, path, title, desc }: NavItemProps) => {
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

const NavSmallItem = ({ icon, path, title }: NavItemProps) => {
  return (
    <a href={path} className="mb-4 flex items-start gap-3.5">
      {React.createElement(icon, { className: "h-7 w-7 text-primary" })}
      <div className="flex-1">
        <h5>{title}</h5>
      </div>
    </a>
  );
};

const NavTitle = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4
      className="my-4 text-sm font-bold uppercase tracking-widest text-gray-400"
      {...props}
    >
      {children}
    </h4>
  );
};

type NavPartProps = {
  title: string;
  children: React.ReactNode;
};

const NavPart = ({ title, children }: NavPartProps) => {
  const [opened, setOpened] = useState(false);
  const [height, setHeight] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  const transitionStyles: { [key in TransitionStatus]: React.CSSProperties } = {
    entering: { maxHeight: 0 },
    entered: { maxHeight: `${height}px`, transition: "max-height 300ms" },
    exiting: { maxHeight: `${height}px` },
    exited: { maxHeight: 0, transition: "max-height 300ms" },
    unmounted: { maxHeight: 0 },
  };

  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className="my-8">
      <div
        className="mb-4 flex cursor-pointer items-center gap-2 text-2xl font-bold"
        onClick={() => setOpened(!opened)}
      >
        {title}
        <IoIosArrowUp
          className={`transition-transform duration-300 ${
            !opened && "rotate-180"
          }`}
        />
      </div>
      <Transition in={opened} timeout={300}>
        {(state) => (
          <div
            ref={divRef}
            className="overflow-hidden"
            style={transitionStyles[state]}
          >
            {children}
          </div>
        )}
      </Transition>
    </div>
  );
};

const Navbar = () => {
  const [opened, setOpened] = useState(true);

  useEffect(() => {
    document.body.style.overflow = opened ? "hidden" : "auto";
  }, [opened]);

  return (
    <header className="fixed z-10 max-h-screen min-h-[5rem] w-full overflow-y-auto bg-white">
      <div className="container absolute flex items-center justify-between border-b bg-white py-4">
        <a href="/">
          <Logo />
        </a>
        <button
          className="flex h-11 items-center gap-1.5 rounded-lg bg-blue-100/60 px-4 py-2 font-medium transition-colors duration-300 hover:bg-blue-100"
          onClick={() => setOpened(!opened)}
        >
          {opened ? (
            <>Close</>
          ) : (
            <>
              <HiOutlineMenuAlt3 className="h-7 w-7" />
              Menu
            </>
          )}
        </button>
      </div>
      {opened && (
        <div className="container flex min-h-screen flex-col pt-20 pb-7">
          <nav className="flex-1 px-14">
            <ul>
              <li>
                <NavPart title="Product">
                  <div className="mb-8">
                    <NavTitle>Overflow</NavTitle>
                    <NavItem
                      icon={(props) => <TiFlowChildren {...props} />}
                      path="/"
                      title="How it Works"
                      desc="Get started with an overview of a typical workflow in Overflow."
                    />
                    <NavItem
                      icon={(props) => <VscGroupByRefType {...props} />}
                      path="/"
                      title="Features"
                      desc="Explore all features in Overflow, split by workflow steps."
                    />
                    <NavItem
                      icon={(props) => (
                        <HiOutlinePresentationChartBar {...props} />
                      )}
                      path="/"
                      title="Design presentation"
                      desc="Engage your audience in design critique with Overflow."
                    />
                  </div>
                  <div className="">
                    <NavTitle>Overflow for</NavTitle>
                    <NavSmallItem
                      icon={(props) => <BiLaptop {...props} />}
                      path="/"
                      title="Product Teams"
                    />
                    <NavSmallItem
                      icon={(props) => <AiOutlineTeam {...props} />}
                      path="/"
                      title="Design Teams"
                    />
                    <NavSmallItem
                      icon={(props) => <MdSupportAgent {...props} />}
                      path="/"
                      title="Design Agencies"
                    />
                    <NavSmallItem
                      icon={(props) => <TiFlowMerge {...props} />}
                      path="/"
                      title="Tech Startups"
                    />
                    <NavSmallItem
                      icon={(props) => <TiFlowSwitch {...props} />}
                      path="/"
                      title="Agile Teams"
                    />
                    <NavSmallItem
                      icon={(props) => <VscMortarBoard {...props} />}
                      path="/"
                      title="Educational Institutions"
                    />
                  </div>
                </NavPart>
              </li>
              <li>
                <NavPart title="Resources">
                  <div className="mb-8">
                    <NavTitle>Overflow</NavTitle>
                    <NavItem
                      icon={(props) => <TiFlowChildren {...props} />}
                      path="/"
                      title="How it Works"
                      desc="Get started with an overview of a typical workflow in Overflow."
                    />
                    <NavItem
                      icon={(props) => <VscGroupByRefType {...props} />}
                      path="/"
                      title="Features"
                      desc="Explore all features in Overflow, split by workflow steps."
                    />
                    <NavItem
                      icon={(props) => (
                        <HiOutlinePresentationChartBar {...props} />
                      )}
                      path="/"
                      title="Design presentation"
                      desc="Engage your audience in design critique with Overflow."
                    />
                  </div>
                  <div className="my-8">
                    <NavTitle>Overflow for</NavTitle>
                    <NavSmallItem
                      icon={(props) => <BiLaptop {...props} />}
                      path="/"
                      title="Product Teams"
                    />
                    <NavSmallItem
                      icon={(props) => <AiOutlineTeam {...props} />}
                      path="/"
                      title="Design Teams"
                    />
                    <NavSmallItem
                      icon={(props) => <MdSupportAgent {...props} />}
                      path="/"
                      title="Design Agencies"
                    />
                    <NavSmallItem
                      icon={(props) => <TiFlowMerge {...props} />}
                      path="/"
                      title="Tech Startups"
                    />
                    <NavSmallItem
                      icon={(props) => <TiFlowSwitch {...props} />}
                      path="/"
                      title="Agile Teams"
                    />
                    <NavSmallItem
                      icon={(props) => <VscMortarBoard {...props} />}
                      path="/"
                      title="Educational Institutions"
                    />
                  </div>
                </NavPart>
              </li>
              <li>
                <a href="/" className="my-8 block text-2xl font-bold">
                  Examples
                </a>
              </li>
              <li>
                <a href="/" className="my-8 block text-2xl font-bold">
                  Download
                </a>
              </li>
              <li>
                <a href="/" className="my-8 block text-2xl font-bold">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-3 flex flex-col gap-7">
            <Button variant="outlined">Sign in</Button>
            <Button variant="contained">Start for free</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
