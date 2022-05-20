import { useState } from "react";
import { Transition } from "react-transition-group";
import { IoIosArrowUp } from "react-icons/io";

import useSlide from "hooks/useSlide";

type Props = {
  title: string;
  children: React.ReactNode;
};

const NavPart = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [elemRef, transitionStyles] = useSlide();

  return (
    <div className="my-8">
      <div
        className="flex cursor-pointer items-center gap-2 text-2xl font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <IoIosArrowUp
          className={`transition-transform duration-300 ${
            !isOpen && "rotate-180"
          }`}
        />
      </div>
      <Transition in={isOpen} timeout={150}>
        {(state) => (
          <div
            ref={elemRef}
            className="overflow-hidden transition-all"
            style={transitionStyles[state]}
          >
            {children}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default NavPart;
