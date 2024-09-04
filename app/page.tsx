// import Image from "next/image";
import Chatbox from "./Component/Bot/Chatbox";
import { CarouselDemo } from "./Component/Carousel";
import Navbar from "./Component/Navbar";

export default function Home() {
  return (
    <div className="bg-[#DEAC80] h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <div className="flex justify-around items-center p-4 h-[100%] w-[100%]">
        <Chatbox />
        <CarouselDemo/>
      </div>
    </div>
  );
}
