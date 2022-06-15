import React from "react";
import Faq from "../src/views/home/faqs/faq";
import Footer from "../src/views/home/footer/Footer";
import Header from "../src/views/home/header/Header";
import Navbar from "../src/views/home/navbar/Navbar";
import Nft from "../src/views/home/nft/Nft";
import Pip from "../src/views/home/pip/Pip";
import Roadmap from "../src/views/home/roadmap/Roadmap";
import Team from "../src/views/home/team/Team";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Pip />
      <Header />
      <Nft />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}
