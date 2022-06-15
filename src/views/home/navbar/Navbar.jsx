import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Navbar({ defaultColor }) {
  const router = useRouter();
  const navbar = useRef(null);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);

  useEffect(() => {
    let color = "rgb(255, 255, 255, 0)";
    window.addEventListener("scroll", (event) => {
      const scrollValue = window.scrollY / 5;
      const rgbValue = 255 - scrollValue < 36 ? 36 : 255 - scrollValue;
      const rgbOpacity = scrollValue / 100;
      color = `rgba(${rgbValue}, ${rgbValue}, ${rgbValue}, ${rgbOpacity})`;
      if (navbar.current?.style) {
        navbar.current.style.backgroundColor = color;
      }
    });
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed ${
        defaultColor ? "bg-all" : ""
      } w-full selection:bg-white border-gray-200 px-2 sm:px-4 py-2.5 z-50`}
      ref={navbar}
    >
      <div className="max-w-[1680px] m-auto">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link href="/#">
            <a className="flex items-center">
              <img
                className="w-[100px] md:w-[131px]"
                src="/images/logo.png"
                alt="Raccoons Isle Logo"
              />
            </a>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 lg:hidden"
            aria-controls="mobile-menu-2"
            onClick={toggleOpen}
          >
            <span className="sr-only">Open main menu</span>
            <img width="30px" src="/images/hamburger-button.png" />
          </button>
          <div className="hidden w-full lg:flex lg:w-auto items-center">
            <div>
              <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-lg -tracking-tighter lg:font-normal xl:text-lg xl:space-x-12 text-white font-balgin">
                <li>
                  <a href="#nft" className="cursor-pointer active">
                    NFT
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="cursor-pointer">
                    ROADMAP
                  </a>
                </li>
                <li>
                  <a href="#team" className="cursor-pointer">
                    TEAM
                  </a>
                </li>
                <li>
                  <a href="#faq" className="cursor-pointer">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:ml-16 xl:ml-32">
              <ul className="flex flex-col items-center mt-4 lg:flex-row lg:space-x-4 lg:mt-0 lg:text-lg lg:font-bold xl:space-x-5 text-white bg-cover">
                <li>
                  <a href="https://discord.gg/a3zwG39uPG" target="_blank" rel="noreferrer">
                    <img className="w-6" src="/images/discord.png" alt="Discord Logo" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/raccoonsislenft" target="_blank" rel="noreferrer">
                    <img className="w-6" src="/images/twitter.png" alt="Twitter Logo" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://opensea.io/collection/raccoons-isle-original"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="w-6" src="/images/opensea.png" alt="OpenSea Logo" />
                  </a>
                </li>
                <li>
                  <Link href="/mint">
                    <a>
                      <div className="relative flex cursor-pointer h-[44px] w-[140px] hover:bg-button-orange-disabled bg-button-orange bg-cover justify-center items-center">
                        <div className="font-balginBold text-brown leading-none font-black mt-[-2px]">
                          MINT
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a className="relative flex cursor-pointer h-[44px] w-[214px] hover:bg-button-yellow-disabled bg-button-yellow justify-center items-center">
                    <div className="font-balginBold text-brown leading-none font-black mt-[-2px]">
                      Connect Wallet
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`lg:hidden flex items-center fixed top-0 right-0 bottom-0 overflow-scroll bg-light-black w-3/5 transition-all duration-500 ${
              open ? "translate-x-[0%]" : "translate-x-[100%]"
            }`}
          >
            <button className="absolute top-[30px] right-[25px] z-10" onClick={toggleOpen}>
              <img width="25px" src="/images/close-button.png" alt="Close Button" />
            </button>
            <div className="flex-1 text-center text-white font-normal text-base font-balgin sm:text-2xl Navbar_Navbar__menu__5nSLc">
              <div className="mb-6">
                <a className="cursor-pointer active">NFT</a>
              </div>
              <div className="mb-6">
                <a className="cursor-pointer">ROADMAP</a>
              </div>
              <div className="mb-6">
                <a className="cursor-pointer">TEAM</a>
              </div>
              <div className="mb-10">
                <a className="cursor-pointer">FAQ</a>
              </div>
              <div className="mb-6">
                <a className="relative block cursor-pointer">
                  <div className="relative block cursor-pointer h-[35px] w-[170px] sm:h-[44px] sm:w-[214px] hover:bg-button-yellow-disabled bg-button-yellow bg-cover m-auto">
                    <div className="font-balginBold font-black text-brown absolute top-[50%] left-0 right-0 translate-y-[-50%] text-center leading-none text-[16px] sm:text-[20px] mt-[-2px]">
                      Connect Wallet
                    </div>
                  </div>
                </a>
              </div>
              <div className="mb-[80px]">
                <div className="relative block cursor-pointer h-[35px] w-[110px] sm:h-[44px] sm:w-[140px] hover:bg-button-orange-disabled bg-button-orange bg-cover m-auto">
                  <div className="font-balginBold font-black text-brown absolute top-[50%] left-0 right-0 translate-y-[-50%] text-center leading-none text-[16px] sm:text-[20px] mt-[-2px]">
                    MINT
                  </div>
                </div>
              </div>
              <div className="max-w-[100px] m-auto">
                <ul className="flex justify-between">
                  <li>
                    <a href="https://discord.gg/a3zwG39uPG" target="_blank" rel="noreferrer">
                      <img className="w-6" src="/images/discord.png" alt="Discord Logo" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/raccoonsislenft" target="_blank" rel="noreferrer">
                      <img className="w-6" src="/images/twitter.png" alt="Twitter Logo" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://opensea.io/collection/raccoons-isle-original"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="w-6" src="/images/opensea.png" alt="OpenSea Logo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
