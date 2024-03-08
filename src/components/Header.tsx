"use client";
import { logo } from "@/assets";
import catalogState from "@/store/catalog";
import useTheme from "@/store/useTheme";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Catalog from "./Catalog";

const Header = () => {
  const { toggleTheme } = useTheme();
  const { openCatalog, toggleCatalog } = catalogState();
  return (
    <>
      <div className="h-[75px] fixed top-0 left-0 right-0 bg-white z-10 py-4 dark:bg-gray-600 flex items-center">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-[112px] h-[32px]" />
          </Link>
          <Button
            className="bg-yellow-500 px-8 rounded-xl font-bold text-black dark:text-white"
            onClick={toggleCatalog}
          >
            Tovarlar katalogi
          </Button>
          <form action="" className="flex items-center justify-center">
            <input
              className="border-2 px-8 py-2 border-yellow-500 rounded-l-lg"
              type="text"
              placeholder="Tovarlarni izlash"
            />
            <Button className="border-2 font-bold bg-yellow-500 px-5 rounded-r-lg border-yellow-500">
              Izlash
            </Button>
          </form>
          <Link href="#">Savat</Link>
          <Link href="#">Saralanganlar</Link>
          <Button
            className="border-2 px-4 text-black dark:text-white border-yellow-500 rounded-xl"
            onClick={toggleTheme}
          >
            Dark / Light
          </Button>
        </div>
      </div>
      {openCatalog && <Catalog />}
    </>
  );
};

export default Header;
