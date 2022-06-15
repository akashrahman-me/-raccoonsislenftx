import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-brown text-center font-poppins-regular text-[12px] md:text-[14px] bg-milky-white px-[15px] py-[15px]">
      © {currentYear} RACCOON’S ISLE ALL RIGHTS RESERVED.
    </div>
  );
}

export default Footer;
