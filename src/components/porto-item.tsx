import { ReactNode, useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import Image from "next/image";

interface PortoItemProps {
  title: string;
  children?: ReactNode;
}

export default function Dropdown({ title, children }: PortoItemProps) {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    if (parent.current) {
      autoAnimate(parent.current);
    }
  }, [parent]);

  const reveal = () => {
    const snd = new Audio("button.mp3");
    snd.play();
    setShow(!show);
  };

  return (
    <div ref={parent} className="mb-3">
      <strong className="dropdown-label inline-block" onClick={reveal}>
        <span
          className={`dropdown-arrow${
            show ? " open" : ""
          } inline-block transition-transform duration-200 mr-2`}
          aria-hidden="true"
        >
          <Image
            width={16}
            height={16}
            src="/arrow.png"
            alt=""
            className="h-[1em] w-[1em] align-middle object-contain inline-block"
          />
        </span>
        {title}
      </strong>
      {show && <div className="dropdown-content mt-3">{children}</div>}
    </div>
  );
}
