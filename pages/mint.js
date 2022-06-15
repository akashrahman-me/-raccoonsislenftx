import React from "react";
import Navbar from "../src/views/home/navbar/Navbar";

export default function Mint() {
  return (
    <div className="relative">
      <Navbar defaultColor />
      <div class="pt-[89px]">
        <div class="flex h-[calc(100vh-90px)] items-center justify-center">
          <div class="max-w-[500px]">
            <img src="/images/loading2.gif" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
