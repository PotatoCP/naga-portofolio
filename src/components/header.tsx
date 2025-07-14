import SocialMedia from "./social-media";

export default function Header() {
  return (
    <header className="flex flex-wrap Sborder-solid border-b-10 w-full">
      <div className="flex justify-between items-center w-full">
        <div>
          <div className="text-[24px]">
            Kenzie Raditya Tirtarahardja
          </div>  
          <div>
            Software Engineer
          </div>
        </div>
        <SocialMedia />
      </div>
    </header>
  );
}
