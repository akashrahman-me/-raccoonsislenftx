import React, { useState } from "react";
import TextPalette from "./TextPalette";
import TextPaletteMobile from "./TextPaletteMobile";

const teamDatam = [
  {
    id: 38,
    title: "TEAM",
    describe: `6 individuals from around the world each with different skillsets were brought
    together to make the &apos;RaccoonVerse&apos; vision come alive. To read more
    about each of our founders, hover your mouse over the raccoons.`,
  },
  {
    id: 38,
    title: "CrazyMarco",
    subtitle: "aka AXEL LIM",
    describe: `Marco is a UI and UX designer with 8 years of experience working alongside various reputable labels. He became a degenz since last year, and pledged to bring his experience to Web3.
    `,
    socials: [
      {
        id: 33,
        icon: "/images/team-twitter.png",
        iconmobile: "images/team-twitter-mobile.png",
        url: "#",
      },
      {
        id: 45,
        icon: "/images/team-ig.png",
        iconmobile: "/images/team-ig-mobile.png",
        url: "#",
      },
    ],
  },
  {
    id: 63,
    title: "Mr.Yamato",
    describe: `The omakase crafter.`,
    socials: [
      {
        id: 36,
        icon: "/images/team-twitter.png",
        iconmobile: "images/team-twitter-mobile.png",
        url: "#",
      },
    ],
  },
  {
    id: 81,
    title: "NightVixion",
    describe: `NightVixion, a Pseudonym name, is a 3D generalist and game designer. He is an easter egg enthusiast and loves to hide them in all his creations for his audience to find.`,
    socials: [
      {
        id: 87,
        icon: "/images/team-twitter.png",
        iconmobile: "images/team-twitter-mobile.png",
        url: "#",
      },
    ],
  },
  {
    id: 81,
    title: "BlueBean",
    subtitle: "aka Angela",
    describe: `BlueBean is a whimsical artist and full-time wizard with tiny paws. She loves exploring the wilderness and seeking lost creatures.`,
    socials: [
      {
        id: 87,
        icon: "/images/team-twitter.png",
        iconmobile: "images/team-twitter-mobile.png",
        url: "#",
      },
      {
        id: 77,
        icon: "/images/team-ig.png",
        iconmobile: "/images/team-ig-mobile.png",
        url: "#",
      },
    ],
  },
  {
    id: 52,
    title: "Jay",
    describe: `Jay is a full-stack developer specializing in JavaScript and Ruby. He worked on the front-end for the first few years of his career, then took the challenge to learn backend and DevOps. Now, he is focusing on Web3 related technologies.`,
    socials: [
      {
        id: 87,
        icon: "/images/team-twitter.png",
        iconmobile: "images/team-twitter-mobile.png",
        url: "#",
      },
    ],
  },
  {
    id: 21,
    title: "Poke",
    describe: `Foreseeing Web3 & NFT as an opportunity, poke ventures back into the technical realm with multiple years of experience in Product & Project Management roles under the sleeve.`,
    socials: [
      {
        id: 91,
        icon: "/images/team-twitter.png",
        iconmobile: "images/team-twitter-mobile.png",
        url: "#",
      },
    ],
  },
];

function Team() {
  const [currentBio, setCurrentBio] = useState(0);
  const changeCurrentBio = (index) => setCurrentBio(index);

  return (
    <div id="team" className="bg-prussian-blue-mobile md:bg-prussian-blue">
      <div className="max-w-[1680px] m-auto pb-[80px] pt-[200px] md:pb-0 md:pt-0">
        <div className="relative">
          <div className="md:hidden">
            <TextPaletteMobile {...teamDatam[currentBio]} />
            <img className="w-full" src="/images/team-mobile.jpg" />
          </div>
          <div className="hidden md:block">
            <img src="/images/team.jpg" />
            <div className="absolute top-[17%] right-[7%] w-[44.465%]">
              <img src="/images/paper.png" />
              <TextPalette {...teamDatam[currentBio]} />
            </div>
          </div>
          <button
            className="absolute top-[28.5%] left-[5.8%] w-[19.5%] md:top-[21.5%] md:left-[11.7%] md:w-[7.7%]"
            onClick={() => changeCurrentBio(1)}
          >
            <img
              className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
              src="/images/team-axel.png"
              alt="Axel"
            />
          </button>
          <button
            className="absolute top-[54.3%] left-[0.4%] w-[28.5%] md:top-[43%] md:left-[9.6%] md:w-[11.2%]"
            onClick={() => changeCurrentBio(0)}
          >
            <img
              className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
              src="/images/team-riki.png"
              alt="Riki"
            />
          </button>
          <button
            className="absolute top-[50.5%] left-[22.4%] w-[20.4%] md:top-[39.8%] md:left-[18.4%] md:w-[8%]"
            onClick={() => changeCurrentBio(2)}
          >
            <img
              className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
              src="/images/team-gavin.png"
              alt="Gavin"
            />
          </button>
          <button
            className="absolute top-[51.2%] left-[47.9%] w-[24%] md:top-[40.4%] md:left-[28.2%] md:w-[9.5%]"
            onClick={() => changeCurrentBio(3)}
          >
            <img
              className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
              src="/images/team-lh.png"
              alt="LH"
            />
          </button>
          <button
            className="absolute top-[37.3%] left-[68.4%] w-[28.9%] md:top-[28.7%] md:left-[36.3%] md:w-[11.5%]"
            onClick={() => changeCurrentBio(4)}
          >
            <img
              className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
              src="/images/team-bluebean.png"
              alt="Blue Bean"
            />
          </button>
          <button
            className="absolute top-[63.4%] left-[71%] w-[24.2%] md:top-[50.7%] md:left-[37.4%] md:w-[9.5%]"
            onClick={() => changeCurrentBio(5)}
          >
            <img
              className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
              src="/images/team-poke.png"
              alt="Poke"
            />
          </button>
          <button
            className="absolute top-[64%] left-[58.6%] w-[21%] md:top-[50.8%] md:left-[32.5%] md:w-[8.3%]"
            onClick={() => changeCurrentBio(6)}
          >
            <img
              className="scale-75 opacity-0 hover:opacity-100 hover:scale-100"
              src="/images/team-jay.png"
              alt="Jay"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
