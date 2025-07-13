import { ReactNode, useState, useRef, useEffect } from 'react';
import autoAnimate from '@formkit/auto-animate';

interface PortoItemProps {
  id: String,
  title: String;
  children?: ReactNode;
}

export default function Dropdown({ id, title, children }: PortoItemProps) {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => {
    setShow(!show)
  }

  return <div ref={parent} key={id} className='mb-3'>
    <strong className="dropdown-label" onClick={reveal}>{title}</strong>
    { show && <div className="dropdown-content">{children}</div> }
  </div>
}