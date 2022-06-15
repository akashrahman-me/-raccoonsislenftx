import React, { useState } from "react";

function FaqItem({ summary, details }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);

  return (
    <div className="border-b-2 border-grey py-5">
      <div
        className="flex font-balgin text-base lg:text-2xl items-start cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex-1 pb-2.5">{summary}</div>
        <div className="px-5">
          <img
            src={!open ? `/images/accordion-open.png` : `/images/accordion-close.png`}
            alt={`${open ? "open" : "close"} accordion button`}
          />
        </div>
      </div>
      {open && <div className="body-copy">{details}</div>}
    </div>
  );
}

export default FaqItem;
