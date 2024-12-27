import Image from "next/image";
import guyPlayingGuitarImage from "../../public/guy_playing_guitar.png";
import Navbar from "./components/Navbar/Navbar";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <Navbar />
      <div className="relative z-[-10] top-[125px] w-full h-96">
        <Image
          src={guyPlayingGuitarImage}
          alt="Guitar guy"
          fill
        />
        <div className="absolute top-[5%] right-[15%] flex flex-col items-end w-1/4">
          <h1 className="uppercase text-white font-extrabold text-[2rem] mb-[20px]">A Complete Unknown:<br/>The Collection</h1>
          <p className="text-white text-[0.75rem] mb-[1rem] font-bold">Shop a specially curated selection of Gibson instruments inspired by guitars placed in the movie</p>
          <button className="bg-[#84734d] py-[11px] px-[10px] w-full"><span className="uppercase text-[.875em] text-white font-bold">Shop The Collection</span></button>
        </div>
      </div>
    </RootLayout>
  );
}
