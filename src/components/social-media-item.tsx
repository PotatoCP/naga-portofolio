"use client";

interface SocialMediaItemProps {
  href: string;
  iconClass: string;
}

export default function SocialMediaItem({
  href,
  iconClass,
}: SocialMediaItemProps) {
  function playSound() {
    const snd = new Audio("button-heavy.mp3");
    snd.play();
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-4"
      onClick={playSound}
    >
      <i className={iconClass}></i>
    </a>
  );
}
