interface SocialMediaItemProps {
  href: string;
  iconClass: string;
}

export default function SocialMediaItem({ href, iconClass }: SocialMediaItemProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="mr-4">
      <i className={iconClass}></i>
    </a>
  );
}
