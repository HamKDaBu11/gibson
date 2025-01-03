import Image from "next/image";
import acoustic from "../../public/acoustic.png";
import basses from "../../public/basses.png";
import buyOneGetTwo from "../../public/buy_one_get_two.jpg";
import customSelect from "../../public/custom_select.png";
import customShop from "../../public/custom_shop.png";
import designer from "../../public/designer.png";
import es from "../../public/es.png";
import gridImgOne from "../../public/grid_img_one.jpg";
import gridImgThree from "../../public/grid_img_three.jpg";
import gridImgTwo from "../../public/grid_img_two.jpg";
import guyPlayingGuitarImageMobile from "../../public/guitar_img_mobile_screen.png";
import guyPlayingGuitarImage from "../../public/guy_playing_guitar.png";
import hummingBird from "../../public/hummingbird.jpg";
import lesPaul from "../../public/les_paul.png";
import newArrivals from "../../public/new_arrivals.jpg";
import orville from "../../public/orville.jpg";
import sg from "../../public/sg.png";
import Navbar from "./components/Navbar/Navbar";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <Navbar />
      <div>
        <div className="relative z-[-10] w-full h-[700px] md:h-96">
          <div className="hidden md:block h-full">
            <Image
              src={guyPlayingGuitarImage}
              alt="Guitar guy"
              fill
            />
          </div>
          <div className="block md:hidden h-full">
            <Image
              src={guyPlayingGuitarImageMobile}
              alt="Guitar guy"
              fill
            />
          </div>
          <div className="absolute bottom-[5%] left-[2%] md:left-auto md:top-[5%] md:right-[15%] flex flex-col items-start md:items-end w-full md:w-1/4">
            <h1 className="uppercase text-white font-extrabold text-[2rem] mb-[20px]">A Complete Unknown:<br />The Collection</h1>
            <p className="text-white text-[0.75rem] mb-[1rem] font-bold">Shop a specially curated selection of Gibson instruments inspired by guitars placed in the movie</p>
            <button className="bg-[#84734d] py-[11px] px-[10px] w-[90%] md:w-full"><span className="uppercase text-[.875em] text-white font-bold">Shop The Collection</span></button>
          </div>
        </div>
      </div>
      <div className="bg-white h-[30px]"></div>

      <div className="max-w-[1280px] m-auto">
        <div className="max-w-[100%] m-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col sm:flex-row md:flex-col">
              <div className="min-[640px]:w-1/2 max-[639px]:w-full min-[768px]:w-full">
                <Image className="object-cover w-full h-[275px]" src={gridImgOne} width={250} height={250} alt="grid img one" />
              </div>
              <div className="bg-black text-white py-[33px] px-[25px] h-auto md:h-[275px] max-w-[100%] sm:max-w-[50%] md:max-w-[100%]">
                <h1 className="uppercase mb-2 text-[20px] font-extrabold">36 Months Special Financing**</h1>
                <span className="inline-block mb-[20px] md:mb-[50px] text-[12px] font-bold leading-1">On qualifying purchases of $999 or more at Gibson.com or the Gibson Garage. December 12, 2024 through January 5, 2025.</span>
                <button className="bg-[#84734d] py-[11px] px-[10px] w-full md:w-1/2"><span className="uppercase text-[.875em] text-white font-bold">Learn More</span></button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col">
              <div className="min-[640px]:w-1/2 max-[639px]:w-full min-[768px]:w-full">
                <Image className="object-cover w-full h-[275px]" src={gridImgTwo} width={250} height={250} alt="grid img one" />
              </div>
              <div className="bg-black text-white py-[33px] px-[25px] h-auto md:h-[275px] max-w-[100%] sm:max-w-[50%] md:max-w-[100%]">
                <h1 className="uppercase mb-2 text-[20px] font-extrabold">GIBSON MOD™ COLLECTION</h1>
                <span className="inline-block mb-[20px] md:mb-[50px] text-[12px] font-bold leading-1">Rarities. Exclusives. Customized one-off guitar mods</span>
                <button className="bg-[#84734d] py-[11px] px-[10px] w-full md:w-1/2"><span className="uppercase text-[.875em] text-white font-bold">Learn More</span></button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col">
              <div className="min-[640px]:w-1/2 max-[639px]:w-full min-[768px]:w-full">
                <Image className="object-cover w-full h-[275px]" src={gridImgThree} width={250} height={250} alt="grid img one" />
              </div>
              <div className="bg-black text-white py-[33px] px-[25px] h-auto md:h-[275px] max-w-[100%]">
                <h1 className="uppercase mb-2 text-[20px] font-extrabold">LES PAUL STUDIO</h1>
                <span className="inline-block mb-[20px] md:mb-[50px] text-[12px] font-bold leading-1">Play it, feel it, and hear it. It’s the one.</span>
                <button className="bg-[#84734d] py-[11px] px-[10px] w-full md:w-1/2"><span className="uppercase text-[.875em] text-white font-bold">Learn More</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-[30px]">
        <div className="max-w-[1280px] m-auto">
          <h1 className="uppercase text-center font-extrabold text-lg">Shop By Category</h1>
          <div className="flex flex-col md:flex-row mt-[35px] items-center md:justify-between">
            <div className="px-[20px] text-center cursor-pointer">
              <Image className="my-[10px]" src={lesPaul} width={75} height={75} alt="les paul image" />
              <span className="px-2 font-semibold">Les Paul</span>
            </div>
            <div className="px-[20px] text-center cursor-pointer">
              <Image className="my-[10px]" src={sg} width={75} height={75} alt="les paul image" />
              <span className="px-2 font-semibold">SG</span>
            </div>
            <div className="px-[20px] text-center cursor-pointer">
              <Image className="my-[10px]" src={es} width={75} height={75} alt="les paul image" />
              <span className="px-2 font-semibold">ES</span>
            </div>
            <div className="px-[20px] text-center cursor-pointer">
              <Image className="my-[10px]" src={acoustic} width={75} height={75} alt="les paul image" />
              <span className="px-2 font-semibold">Acoustic</span>
            </div>
            <div className="px-[20px] text-center cursor-pointer">
              <Image className="my-[10px]" src={designer} width={75} height={75} alt="les paul image" />
              <span className="px-2 font-semibold">Designer</span>
            </div>
            <div className="px-[20px] text-center cursor-pointer">
              <Image className="my-[10px]" src={basses} width={75} height={75} alt="les paul image" />
              <span className="px-2 font-semibold">Basses</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] m-auto">
        <div className="max-w-[100%] m-[20px]">
          <div className="grid grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-3 gap-6">
            <div className="flex flex-col md:flex-row md:h-[210px]">
              <div className="w-full md:w-1/2">
                <Image className="object-cover w-full h-[210px]" src={newArrivals} width={500} height={100} alt="new arrivals" />
              </div>
              <div className="bg-black p-[20px] w-full md:min-w-[300px]">
                <div className="my-[20px]">
                  <h1 className="uppercase text-white font-extrabold text-[1.37rem] mb-[5px] leading-5">New Arrivals</h1>
                  <span className="text-white text-[12px] font-semibold leading-3 inline-block mb-[15px]">Shop the latest releases from Gibson, including <br></br> electric and acoustic guitars, amplifiers, and more</span>
                  <button className="bg-[#84734d] py-[11px] px-[10px] w-[87%]"><span className="uppercase text-[.875em] text-white font-bold">Shop Now</span></button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:h-[210px]">
              <div className="w-full md:w-1/2">
                <Image className="object-cover w-full h-[210px]" src={buyOneGetTwo} width={500} height={100} alt="new arrivals" />
              </div>
              <div className="bg-black p-[20px] w-full md:min-w-[300px]">
                <div className="my-[20px]">
                  <h1 className="uppercase text-white font-extrabold text-[1.37rem] mb-[5px] leading-5">Buy One, Get Two</h1>
                  <span className="text-white text-[12px] font-semibold leading-3 inline-block mb-[15px]">Buy one Les Paul Standard and receive two Maestro pedals free. Limited time offer, while supplies last. Quantities are limited. Offer expires 1/13/2024.</span>
                  <button className="bg-[#84734d] py-[11px] px-[10px] w-[87%]"><span className="uppercase text-[.875em] text-white font-bold">Shop Now</span></button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:h-[210px]">
              <div className="w-full md:w-1/2">
                <Image className="object-cover w-full h-[210px]" src={hummingBird} width={275} height={100} alt="new arrivals" />
              </div>
              <div className="bg-black p-[20px] w-full md:min-w-[300px]">
                <div className="my-[20px]">
                  <h1 className="uppercase text-white font-extrabold text-[1.37rem] mb-[5px] leading-5">Evolution of an Icon</h1>
                  <span className="text-white text-[12px] font-semibold leading-3 inline-block mb-[15px]">Buy one Les Paul Standard and receive two Maestro pedals free. Limited time offer, while supplies last. Quantities are limited. Offer expires 1/13/2024.</span>
                  <button className="bg-[#84734d] py-[11px] px-[10px] w-[87%]"><span className="uppercase text-[.875em] text-white font-bold">Shop Now</span></button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:h-[210px]">
              <div className="w-full md:w-1/2">
                <Image className="object-cover w-full h-[210px]" src={orville} width={275} height={100} alt="new arrivals" />
              </div>
              <div className="bg-black p-[20px] w-full md:min-w-[300px]">
                <div className="my-[20px]">
                  <h1 className="uppercase text-white font-extrabold text-[1.37rem] mb-[5px] leading-5">J-45 ORVILLE ARTISAN 130TH ANNIVERSARY LIMITED EDITION</h1>
                  <span className="text-white text-[12px] font-semibold leading-3 inline-block mb-[15px]">An ornately detailed limited-edition model commemorating Gibson’s 130th anniversary</span>
                  <button className="bg-[#84734d] py-[11px] px-[10px] w-[87%]"><span className="uppercase text-[.875em] text-white font-bold">Shop Now</span></button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:h-[210px]">
              <div className="w-full md:w-1/2">
                <Image className="object-cover w-full h-[210px]" src={customSelect} width={275} height={100} alt="new arrivals" />
              </div>
              <div className="bg-black p-[20px] w-full md:min-w-[300px]">
                <div className="my-[20px]">
                  <h1 className="uppercase text-white font-extrabold text-[1.37rem] mb-[5px] leading-5">GIBSON CUSTOM SELECT</h1>
                  <span className="text-white text-[12px] font-semibold leading-3 inline-block mb-[15px]">Check out the latest Gibson Custom Select offerings, including Heavy-Aged Les Paul Customs with nickel hardware, a 5A Maple SJ-200 in Wildfire Burst, and gloss-top 1959 Les Paul Standard Reissues</span>
                  <button className="bg-[#84734d] py-[11px] px-[10px] w-[87%]"><span className="uppercase text-[.875em] text-white font-bold">Shop Now</span></button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:h-[210px]">
              <div className="w-full md:w-1/2">
                <Image className="object-cover w-full h-[210px]" src={customShop} width={275} height={100} alt="new arrivals" />
              </div>
              <div className="bg-black p-[20px] w-full md:min-w-[300px]">
                <div className="my-[20px]">
                  <h1 className="uppercase text-white font-extrabold text-[1.37rem] mb-[5px] leading-5">GIBSON CUSTOM MADE TO MEASURE</h1>
                  <span className="text-white text-[12px] font-semibold leading-3 inline-block mb-[15px]">Create the instrument of your dreams with the artisans of Gibson Custom</span>
                  <button className="bg-[#84734d] py-[11px] px-[10px] w-[87%]"><span className="uppercase text-[.875em] text-white font-bold">Learn More</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
