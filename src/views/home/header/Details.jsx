import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";

const datam = [
  {
    id: 394,
    title: "Cloud Fort",
    content:
      "Jungle Raccoons, living in the Petal Village, are blessed with Sky Raccoons, living in the Cloud Fort, are blessed with advanced technology and a prosperous economy. They travel in a flying ship. Many would come for their machinery parts. Hence, they are known as machinery hubs.",
  },
  {
    id: 324,
    title: "Ringtail City",
    content:
      "Most raccoons living in the Ringtail City are called urban raccoons. The city is well-known for its trading ground. All merchants across the island would gather here to trade their goods.",
  },
  {
    id: 594,
    title: "Petals Village",
    content:
      "Jungle Raccoons, living in the Petal Village, are blessed with fresh crops and have healthy animals as their ride. They supply products to Ringtail City. The majority of them live in treehouses. They are known for their fresh vegetable & professional animal trainer.",
  },
  {
    id: 794,
    title: "Fishbone village",
    content:
      "Fishbone Village house a small population of Sea raccoons. Sea raccoons fish for food and transport sea goods to the central city. They are known for their fishing skill.",
  },
  {
    id: 374,
    title: "Riki House",
    content:
      "Home of the wisest raccoon. Riki used to be a magician's pet. Playful young Riki was sniffing some spell until he got cursed by it. He was teleported to an island by accident. The island is now known as Raccoon's Isle. At the island, Riki managed to summon more raccoons while he was experimenting with spells.",
  },
  {
    id: 398,
    title: "Skull Island",
    content:
      "Skull Island is a dangerous place, especially when night comes, creatures lurking in shadows emerge. Many raccoons ventured here as this is the place you can find the rarest loot. However, those that went never came back....",
  },
];

function Details({ index, close }) {
  return (
    <div
      className={`absolute w-[75%] max-w-[320px] sm:w-[50%] sm:max-w-[400px] lg:w-[35%] left-0 right-0 top-[50%] translate-y-[-45%] m-auto z-40 ${
        index !== false ? "block" : "hidden"
      }`}
    >
      <div className="animate__animated animate__flipInX">
        <div>
          <img className="w-full hidden md:block" src="/images/infobox.png" alt="Info Box" />
          <img className="w-full md:hidden" src="/images/infobox-mobile.png" alt="Info Box" />
          <div className="absolute top-[10%] left-0 right-0 w-[75%] m-auto">
            <div className="font-balgin text-brown text-[16px] sm:text-2xl pb-[10px]">
              {datam?.[index]?.title}
            </div>
            <div className="font-poppins-regular text-brown body-copy">
              {datam?.[index]?.content}
            </div>
          </div>
        </div>
        <button className="absolute top-[-1%] right-[-4%] w-[12%]" onClick={close}>
          <img src="/images/infobox-close-button-disabled.png" alt="Infobox Close Button" />
        </button>
      </div>
    </div>
  );
}

export default Details;
