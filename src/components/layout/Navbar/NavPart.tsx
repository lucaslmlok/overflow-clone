import { useState, useEffect, useRef } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { IoIosArrowUp } from "react-icons/io";

type Props = {
  title: string;
  children: React.ReactNode;
};

const NavPart = ({ title, children }: Props) => {
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

export default NavPart;
