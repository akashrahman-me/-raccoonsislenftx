import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Roadmap() {
  return (
    <div
      id="roadmap"
      className="bg-milky-white bg-roadmap-background-mobile lg:bg-roadmap-background bg-cover lg:bg-bottom bg-no-repeat"
    >
      <div className="max-w-[1680px] m-auto section relative">
        <div className="font-thunder text-brown body-title text-center leading-none">
          <AnimationOnScroll animateIn="animate__fadeInUp">ROADMAP</AnimationOnScroll>
        </div>
        <div className="text-brown max-w-[440px] m-auto px-[15px] pb-[35px] body-copy">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            Roadmap will be revealed based on discord milestones or during sales day.
          </AnimationOnScroll>
        </div>
        <div className="max-w-[1430px] m-auto px-[15px]">
          <div className="roadmap-container m-auto">
            <div className="row row-cols-2 g-3">
              <div className="col-12 col-sm-6 col-md-4 col-xxl undefined">
                <div className="relative rounded-[20px] max-w-[220px] md:max-w-[270px] m-auto overflow-hidden">
                  <AnimationOnScroll animateIn="animate__flipInY">
                    <img
                      className="w-full relative pointer-events-none"
                      src="/images/roadmap-1.png"
                    />
                    <div className="absolute bg-light-black opacity-0 hover:opacity-90 top-0 bottom-0 left-0 right-0 px-[15px] py-[35%] cursor-pointer">
                      <p className="font-balgin text-white text-[18px] md:text-[24px] pb-[15px]">
                        Exclusive Merch Drop, Early Q2
                      </p>
                      <p className="text-white body-copy">
                        Exclusive Raccoon&apos;s Isle merchandise on our website + Decentraland
                        merchandise airdrop! Making sure you look extra sharp in all ways~
                      </p>
                    </div>
                  </AnimationOnScroll>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-xxl undefined">
                <div className="relative rounded-[20px] max-w-[220px] md:max-w-[270px] m-auto overflow-hidden">
                  <AnimationOnScroll animateIn="animate__flipInY" delay={100}>
                    <img
                      className="w-full relative pointer-events-none"
                      src="/images/roadmap-2.png"
                    />
                    <div className="absolute bg-light-black opacity-0 hover:opacity-90 top-0 bottom-0 left-0 right-0 px-[15px] py-[35%] cursor-pointer">
                      <p className="font-balgin text-white text-[18px] md:text-[24px] pb-[15px]">
                        Website Revamp, Late Q2
                      </p>
                      <p className="text-white body-copy">
                        Our tech raccoons will revamp the website making it interactive in the next
                        phase.
                      </p>
                    </div>
                  </AnimationOnScroll>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-xxl undefined">
                <div className="relative rounded-[20px] max-w-[220px] md:max-w-[270px] m-auto overflow-hidden">
                  <AnimationOnScroll animateIn="animate__flipInY" delay={300}>
                    <img
                      className="w-full relative pointer-events-none"
                      src="/images/roadmap-3.png"
                    />
                    <div className="absolute bg-light-black opacity-0 hover:opacity-90 top-0 bottom-0 left-0 right-0 px-[15px] py-[35%] cursor-pointer">
                      <p className="font-balgin text-white text-[18px] md:text-[24px] pb-[15px]">
                        Riki Diary, Early Q3
                      </p>
                      <p className="text-white body-copy">
                        Riki diary (physical copy) will be made free for all raccoon holders. The
                        book includes Raccoon Isle&apos;s lore and art illustration, also with some
                        hidden secrets.
                        <br />
                        <br />
                        <small>*KYC is required for shipping the physical copy</small>
                      </p>
                    </div>
                  </AnimationOnScroll>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-xxl offset-md-2 offset-xxl-0">
                <div className="relative rounded-[20px] max-w-[220px] md:max-w-[270px] m-auto overflow-hidden">
                  <AnimationOnScroll animateIn="animate__flipInY" delay={400}>
                    <img
                      className="w-full relative pointer-events-none"
                      src="/images/roadmap-4.png"
                    />
                    <div className="absolute bg-light-black opacity-0 hover:opacity-90 top-0 bottom-0 left-0 right-0 px-[15px] py-[35%] cursor-pointer">
                      <p className="font-balgin text-white text-[18px] md:text-[24px] pb-[15px]">
                        Raccoon&apos;s Companion Airdrop, Late Q3
                      </p>
                      <p className="text-white body-copy">
                        There will be a free airdrop for all raccoon holders. Companion is an
                        important aspect of Raccoon&apos;s Isle ecosystem.
                      </p>
                    </div>
                  </AnimationOnScroll>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-xxl undefined">
                <div className="relative rounded-[20px] max-w-[220px] md:max-w-[270px] m-auto overflow-hidden">
                  <AnimationOnScroll animateIn="animate__flipInY" delay={500}>
                    <img
                      className="w-full relative pointer-events-none"
                      src="/images/roadmap-5.png"
                    />
                    <div className="absolute bg-light-black opacity-0 hover:opacity-90 top-0 bottom-0 left-0 right-0 px-[15px] py-[35%] cursor-pointer">
                      <p className="font-balgin text-white text-[18px] md:text-[24px] pb-[15px]">
                        Utility Token unlock, Early Q4
                      </p>
                      <p className="text-white body-copy">
                        Stack your raccoons in Ringtail City to gain extra coins to spend in the
                        Raccoon&apos;s Isle.
                      </p>
                    </div>
                  </AnimationOnScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
