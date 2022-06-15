import React from "react";

function TextPalette({ title, subtitle, describe, socials }) {
  return (
    <div className="animate__animated absolute top-0 bottom-0 left-0 right-0 m-auto w-[76%] lg:w-[72%] h-[75%] lg:h-[65%] 2xl:h-[60%]">
      <div className="font-thunder fonb-bold leading-none text-brown md:text-[5.5vw] 2xl:text-[150px] mb-5">
        {title}
      </div>
      {subtitle && <div className="text-brown font-poppins-medium">{subtitle}</div>}
      <div className="text-brown text-[14px] lg:text-[16px] leading-[1.4] body-copy pt-[10px] lg:pt-[40px]">
        {describe}
      </div>
      <div className="flex pt-[10px] lg:pt-[40px]">
        {socials?.map(({ url, icon }, i) => (
          <a key={i} href={url} target="_blank" rel="noreferrer" className="pr-[20px]">
            <img src={icon} alt="Twitter" className="w-[30px] lg:w-[39px]" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default TextPalette;
