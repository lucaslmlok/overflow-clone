import { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { ReactComponent as Logo } from "assets/logo.svg";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarHeight = navbarRef.current ? navbarRef.current.scrollHeight : 0;

  const transitionStyles: TransitionStyles = {
    entering: { maxHeight: `calc(100vh - ${navbarHeight}px)` },
    entered: { maxHeight: `calc(100vh - ${navbarHeight}px)` },
    exiting: { maxHeight: 0 },
    exited: { maxHeight: 0 },
    unmounted: { maxHeight: 0 },
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="fixed z-10 w-full bg-white">
      <div
        ref={navbarRef}
        className="container flex items-center justify-between border-b py-5"
      >
        <a href="/">
          <Logo />
        </a>
        <button
          className="flex h-11 items-center gap-1.5 rounded-lg bg-blue-100/60 px-4 py-2 font-medium transition-colors duration-300 hover:bg-blue-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <>Close</>
          ) : (
            <>
              <HiOutlineMenuAlt3 className="h-7 w-7" />
              Menu
            </>
          )}
        </button>
      </div>

      <Transition in={isOpen} timeout={300}>
        {(state) => (
          <div
            ref={menuRef}
            className="fixed h-screen w-full overflow-hidden transition-all duration-300 ease-in-out"
            style={transitionStyles[state]}
          >
            <NavMenu />
          </div>
        )}
      </Transition>
    </header>
  );
};

export default Navbar;
