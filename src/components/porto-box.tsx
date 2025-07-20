import { ReactNode } from "react";

interface PortoBoxProps {
  title: string;
  children?: ReactNode;
}

export default function PortoBox({ title, children }: PortoBoxProps) {
  return (
    <div className="nes-container with-title width: auto">
      <p className="title">{title}</p>
      {children}
    </div>
  );
}
