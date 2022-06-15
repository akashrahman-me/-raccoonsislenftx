import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import FaqItem from "./FaqItem";

function Faq() {
  return (
    <div id="faq" className="bg-milky-white overflow-hidden">
      <div className="max-w-[1680px] m-auto">
        <div className="max-w-[950px] mx-auto text-brown section px-[15px] sm:px-[40px]">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <h1 className="font-thunder body-title text-center">FAQ</h1>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp" delay={250}>
            <div>
              <FaqItem
                summary="What is the supply and mint price?"
                details="There will be a total of 6500 Raccoons available. Free mint."
              />
              <FaqItem summary="Token Standard?" details="ERC-721" />
              <FaqItem
                summary="What is the royalty fee?"
                details={
                  <>
                    Raccoon's Isle 6.5%
                    <br />
                    Opensea 2.5%
                    <br />
                    Looksrare 2%
                  </>
                }
              />
              <FaqItem summary="Blockchain?" details="Ethereum" />
              <FaqItem
                summary="How to mint?"
                details=" You need to have a metamask wallet setup and make sure you have enough Ethereum in
                  your wallet to cover the mint and gas fee, and during the mint day, you will be
                  able to connect to the website via the wallet you set up and proceed to mint from
                  there."
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Faq;
