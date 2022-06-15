import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function TextPaletteMobile({ title, subtitle, describe, socials }) {
  return (
    <AnimationOnScroll animateIn="animate-fadeIn">
      <div className="px-[15px] sm:max-w-[90%] m-auto absolute left-0 right-0 top-[-170px] sm:top-[-130px]">
        <div className="font-thunder text-white text-center text-[60px] leading-none">{title}</div>
        {subtitle && <div class="font-poppins-medium text-white text-center">{subtitle}</div>}
        <div className="text-white body-copy pt-[20px]">{describe}</div>
        <div className="flex justify-center pt-[30px]">
          {socials?.map(({ iconmobile, url }, i) => (
            <a href={url} target="_blank" rel="noreferrer" class="pr-[20px]" key={i}>
              <img src={iconmobile} alt="Twitter" class="w-[30px]" />
            </a>
          ))}
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default TextPaletteMobile;
