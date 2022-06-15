import React, { useEffect, useRef, useState } from "react";
import Details from "./Details";

function Header() {
  const headerArea = useRef(null);
  const [detailsIndex, setDetailsIndex] = useState(false);
  const openDetailsIndex = (index) => {
    setDetailsIndex(index);
  };

  useEffect(() => {
    headerArea.current.addEventListener("mousemove", (event) => {
      const x = (headerArea.current.clientWidth / 2 - event.pageX) / 30;
      const y = (headerArea.current.clientHeight / 2 - event.pageY) / 20;

      [...headerArea.current.querySelectorAll(".parallax")].map((child) => {
        child.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  });

  return (
    <div ref={headerArea}>
      <div
        className="bg-island-mobile lg:bg-island pt-[100px] pb-[100px] sm:pt-[100px] lg:pt-0 lg:pb-0 overflow-hidden"
        id="islandSection"
      >
        <div className="max-w-[1680px] m-auto relative">
          <div className="hidden md:block">
            <div className="absolute bottom-[-10%] left-[-8%] z-10 w-[41%]">
              <img className="w-full parallax" src="/images/cloud-1.png" alt="Cloud" />
            </div>
            <div className="absolute bottom-[-6%] right-[-10%] z-10 w-[29%]">
              <img className="w-full parallax" src="/images/cloud-2.png" alt="Cloud" />
            </div>
            <div className="absolute top-[42%] md:top-[30%] right-[-10%] z-10 w-[15%]">
              <img className="w-full parallax" src="/images/cloud-3.png" alt="Cloud" />
            </div>
            <div className="absolute top-[54%] md:top-[50%] left-[-1%] z-10 w-[10%]">
              <img className="w-full parallax" src="/images/cloud-4.png" alt="Cloud" value={5} />
            </div>
          </div>
          <div className="md:hidden">
            <div className="absolute bottom-[5%] left-[-3%] z-10 w-[41%]">
              <img className="w-full" src="/images/cloud-1.png" alt="Cloud" />
            </div>
            <div
              className="absolute bottom-[15%] right-0 z-10 w-[29%]"
              style={{
                willChange: "transform",
                transform: "translateX(30%) translateY(30%)",
              }}
            >
              <img className="w-full" src="/images/cloud-2.png" alt="Cloud" />
            </div>
            <div
              className="absolute top-[30%] md:top-[30%] right-0 z-10 w-[15%]"
              style={{
                willChange: "transform",
                transform: "translateX(40%) translateY(50%)",
              }}
            >
              <img className="w-full" src="/images/cloud-3.png" alt="Cloud" />
            </div>
            <div
              className="absolute top-[50%] md:top-[50%] left-0 z-10 w-[10%]"
              style={{
                willChange: "transform",
                transform: "translateX(-40%) translateY(30%)",
              }}
            >
              <img className="w-full" src="/images/cloud-4.png" alt="Cloud" />
            </div>
          </div>
          <Details close={() => openDetailsIndex(false)} index={detailsIndex} />
          <div className="relative">
            <picture>
              <source media="(min-width:1024px)" srcSet="/images/map.jpg" />
              <img className="w-full" src="/images/map-mobile.jpg" alt="Raccoons Isle Map" />
            </picture>
            <button
              className="absolute top-[53.6%] left-[0.8%] w-[23.8%] lg:top-[56%] lg:left-[10.6%] lg:w-[18.5%]"
              onClick={() => openDetailsIndex(5)}
            >
              <img
                className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
                src="/images/skull-island.png"
                alt="Skull Island"
              />
            </button>
            <button
              className="absolute w-[21.8%] top-[15%] left-[10.8%] lg:w-[16.8%] lg:top-[16%] lg:left-[18.6%]"
              onClick={() => openDetailsIndex(0)}
            >
              <img
                className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
                src="/images/cloud-fort.png"
                alt="Cloud Fort"
              />
            </button>
            <button
              className="absolute w-[32.8%] left-[23.5%] top-[23.1%] lg:w-[25.8%] lg:top-[24%] lg:left-[28%]"
              onClick={() => openDetailsIndex(1)}
            >
              <img
                className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
                src="/images/ringtail-city.png"
                alt="Ringtail City"
              />
            </button>
            <button
              className="absolute w-[34.7%] left-[48.8%] top-[30.2%] lg:w-[27.5%] lg:top-[31.3%] lg:left-[47.7%]"
              onClick={() => openDetailsIndex(2)}
            >
              <img
                className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
                src="/images/petals-village.png"
                alt="Petals Village"
              />
            </button>
            <button
              className="absolute w-[33%] left-[62.2%] top-[52.6%] lg:w-[26%] lg:top-[54.7%] lg:left-[58.3%]"
              onClick={() => openDetailsIndex(3)}
            >
              <img
                className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
                src="/images/fishbone-village.png"
                alt="Fishbone Village"
              />
            </button>
            <button
              className="absolute w-[23.1%] left-[44.2%] top-[56.8%] lg:w-[18.2%] lg:top-[59%] lg:left-[44.1%]"
              onClick={() => openDetailsIndex(4)}
            >
              <img
                className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
                src="/images/riki-house.png"
                alt="Riki House"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
