import Header from "@/components/header";
import Body from "@/components/body";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
