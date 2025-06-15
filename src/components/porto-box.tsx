import { experiences } from "@/lib/data";

type PortoBoxProps = (typeof experiences)[number];

export default function PortoBox({
  title,
  period,
}: PortoBoxProps) {
  <div className="nes-container with-title width: auto">
    <p className="title">{title}</p>

    
  </div>
}