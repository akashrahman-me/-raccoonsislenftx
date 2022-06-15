import React, { useEffect, useState } from "react";

const datam = [
  "Once upon a raccoon's tail.",
  "Raccoons can eat just about anything, making them ideal for urban life.",
  "Did you know? I don't know too",
  "We stay up all night.That's why I have dark circles.",
  "What kind of car does a raccoon drive? A Furrari.",
  "Anyone still remember when did I arrive at Raccoon Isle ??",
  "Sometimes I really don't understand the taste of today's kids.",
];

function Pip() {
  const [index, setIndex] = useState(0);
  const nextIndex = () => setIndex((v) => (v >= datam.length - 1 ? 0 : v + 1));

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);

  useEffect(() => {
    if (open) {
      window.addEventListener("scroll", () => {
        setOpen(false);
      });
    }
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[1680px] m-auto z-40">
      <div className="flex absolute bottom-0 right-[5%] items-start">
        {open && (
          <div class="relative translate-y-[40%]">
            <img
              class="w-[235px] sm:w-[190px] md:w-[235px]"
              src="/images/speech-board-0.png"
              alt="Speech Board"
            />
            <div class="absolute font-poppins-regular text-brown left-0 right-0 top-0 bottom-0 h-[53%] w-[80%] m-auto">
              <div class="text-[12px] leading-[1.4]">{datam[index]}</div>
            </div>
          </div>
        )}
        <button className={open ? "" : "mb-2.5 mr-5 md:mb-5 md:mr-10"}>
          {open ? (
            <img
              class="w-[156px] sm:w-[128px] md:w-[156px]"
              src="/images/riki.png"
              alt="Riki"
              onClick={nextIndex}
            />
          ) : (
            <img
              className="w-[90px] md:w-[90px]"
              src="/images/riki-icon.png"
              alt="Riki Icon"
              onClick={() => {
                nextIndex();
                toggleOpen();
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default Pip;
