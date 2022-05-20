import { useRef, RefObject } from "react";

const useSlide = () => {
  const elemRef = useRef<HTMLElement>(null);
  const height = elemRef.current ? elemRef.current.scrollHeight : 0;

  const transitionStyles: TransitionStyles = {
    entering: { maxHeight: `${height}px` },
    entered: { maxHeight: `${height}px` },
    exiting: { maxHeight: 0 },
    exited: { maxHeight: 0 },
    unmounted: { maxHeight: 0 },
  };

  return [elemRef, transitionStyles] as [RefObject<any>, TransitionStyles];
};

export default useSlide;
