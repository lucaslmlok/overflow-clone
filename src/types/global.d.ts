export {};

declare global {
  type TransitionStyles = { [key in TransitionStatus]: React.CSSProperties };
}
