import { ReactNode } from "react";

export default function Wrapper({
  children,
  cssClasses = "",
}: {
  children: ReactNode;
  cssClasses?: string;
}) {
  const style = "h-full w-11/12 max-w-5xl mx-auto" + " " + cssClasses;

  return <div className={style}>{children}</div>;
}
