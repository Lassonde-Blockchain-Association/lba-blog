"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import marker from "../components/lib/marker.gif";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheets";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import SelectedCategorySingleton from "../components/globalSelectedCategory";

const Navbar = () => {
  function resetCategory() {
    SelectedCategorySingleton.resetSelectedCategory();
  }

  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="container mx-auto sm:px-4">
        <div className="fixed backdrop-blur-sm bg-white/75 z-50 top-0 left-0 right-0 h-fits dark:bg-slate-900/75 shadow-sm flex items-center justify-between">
          <div className="container flex justify-between m-auto items-center">
            <div>
              <Link
                href="/"
                onClick={() => {
                  resetCategory();
                }}
                className="text-2xl lg:mx-12 md:mx-8 mx-4 font-bold bg-gradient-to-r justify-end from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
              >
                LBA - Blog
              </Link>
            </div>
            <div>
              <div className="flex justify-end lg:mx-12 md:mx-8 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                {/* <div className="right-10 border dark:hover:bg-slate-50 duration-100 dark:bg-slate-800 bg-grap-100 rounded transition"> */}
                {currentTheme === "dark" ? (
                  // {/* light button */}

                  <button
                    onClick={() => setTheme("light")}
                    // onClick={() =>
                    //   theme == "dark" ? setTheme("light") : setTheme("dark")
                    // }
                    className="leading-9 text-x1 rounded-full m-1 text-orange-400"
                  >
                    <BsFillSunFill className="w-6 h-6" target="_blank" />
                  </button>
                ) : (
                  // {/* dark button */}
                  <button
                    onClick={() => setTheme("dark")}
                    className=" leading-9 text-x1 rounded-full m-1 text-purple-600"
                  >
                    <MdDarkMode className="w-6 h-6" target="_blank" />
                  </button>
                )}
              </div>
            </div>

            {/* Hidden Side Bar */}

            <div className="top-0 right-0 p-0 md:hidden">
              <Sheet>
                <SheetTrigger>
                  <Image src={marker} alt="logo" width={75} height={75} />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>LBA-Main Website</SheetTitle>
                    <SheetTitle>Blog Home</SheetTitle>
                    <SheetTitle>About Us</SheetTitle>
                    <SheetTitle>Contact Us</SheetTitle>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
