import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Nft() {
  return (
    <div id="nft" className="bg-dark-green">
      <div className="max-w-[1680px] m-auto relative section px-[15px]">
        <div className="max-w-[1200px] m-auto">
          <div className="row items-center">
            <div className="col-md-6 md:order-last">
              <div className="max-w-[560px] md:max-w-none m-auto">
                <div className="font-thunder text-white leading-[1] text-[70px] text-center md:text-left md:text-[80px] lg:text-[100px] xl:text-[100px] font-semibold 2xl:text-[150px] pb-9">
                  <AnimationOnScroll animateIn="animate__fadeInUp">
                    RACCOON&apos;S
                    <br />
                    ISLE NFTS
                  </AnimationOnScroll>
                </div>
                <div className="text-white pb-[30px] body-copy">
                  <AnimationOnScroll animateIn="animate__fadeInUp">
                    Raccoon&apos;s Isle is a collection of 6500 raccoons living on the Ethereum
                    blockchain. It is created from a combination of over 445 hand-drawn traits with
                    varying rarity across all different categories. There will also be some special
                    1/1s hidden in the collection to be minted.
                    <br />
                    <br />
                    Holding a raccoon grants you an exclusive spot in Raccoon&apos;s Isle and all
                    the perks that are to come. Perks will include companion, land, and utility
                    token for you to get started in Raccoon&apos;s Isle ecosystem. On top of that,
                    raccoon owners will also have access to our very own clothing and merchandise.
                    There are so much potential and possibilities for expansion. Come join us now
                    and be part of Raccoon Isle citizen!
                  </AnimationOnScroll>
                </div>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                  <div className="flex justify-center md:justify-start pb-[50px] md:pb-0">
                    <div className="flex items-center sm:mr-[15px]">
                      <div className="h-[38px] leading-[38px] w-[75px] lg:w-[96px] relative overflow-hidden">
                        <div className="absolute top-0 animate-slide ">
                          <span className="flex top-0 items-center">
                            <img className="h-[38px]" src="/images/about-icon-1.png" />
                            <span className="text-white font-poppins-light font-thin lg:text-[28px] xl:text-[38px] pl-[10px]">
                              50
                            </span>
                          </span>
                          <span className="flex top-0 items-center">
                            <img className="h-[38px]" src="/images/about-icon-5.png" />
                            <span className="text-white font-poppins-light font-thin lg:text-[28px] xl:text-[38px] pl-[10px]">
                              37
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center sm:mr-[15px]">
                      <div className="h-[38px] leading-[38px] w-[75px] lg:w-[96px] relative overflow-hidden">
                        <div className="absolute top-0 animate-slide animation-delay-2s">
                          <span className="flex top-0 items-center">
                            <img className="h-[38px]" src="/images/about-icon-2.png" />
                            <span className="text-white font-poppins-light font-thin lg:text-[28px] xl:text-[38px] pl-[10px]">
                              45
                            </span>
                          </span>
                          <span className="flex top-0 items-center">
                            <img className="h-[38px]" src="/images/about-icon-6.png" />
                            <span className="text-white font-poppins-light font-thin lg:text-[28px] xl:text-[38px] pl-[10px]">
                              68
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center sm:mr-[15px]">
                      <div className="h-[38px] leading-[38px] w-[75px] lg:w-[96px] relative overflow-hidden">
                        <div className="absolute top-0 animate-slide ">
                          <span className="flex top-0 items-center">
                            <img className="h-[38px]" src="/images/about-icon-3.png" />
                            <span className="text-white font-poppins-light font-thin lg:text-[28px] xl:text-[38px] pl-[10px]">
                              45
                            </span>
                          </span>
                          <span className="flex top-0 items-center">
                            <img className="h-[38px]" src="/images/about-icon-7.png" />
                            <span className="text-white font-poppins-light font-thin lg:text-[28px] xl:text-[38px] pl-[10px]">
                              67
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center sm:mr-[15px]">
                      <div className="h-[38px] leading-[38px] w-[75px] lg:w-[96px] relative overflow-hidden">
                        <div className="absolute top-0 animate-slide animation-delay-2s">
                          <span className="flex top-0 items-center">
                            <img className="h-[38px]" src="/images/about-icon-4.png" />
                            <span className="text-white font-poppins-light font-thin lg:text-[28px] xl:text-[38px] pl-[10px]">
                              45
                            </span>
                          </span>
                          <span className="flex top-0 items-center">
                            <img className="h-[38px]" src="/images/about-icon-8.png" />
                            <span className="text-white font-poppins-light font-thin lg:text-[28px] xl:text-[38px] pl-[10px]">
                              79
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
            <div className="col-md-6">
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="max-w-[490px] max-h-[565px] m-auto overflow-hidden rounded-[20px]">
                  <img
                    className="w-full animate-scroll1 animation-delay element-auto-scroll"
                    src="/images/nft.png"
                  />
                  <img
                    className="w-full animate-scroll2 mt-[-35%] animation-delay element-auto-scroll"
                    src="/images/nft.png"
                  />
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nft;
