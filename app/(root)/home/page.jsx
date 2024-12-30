import React from "react";
import EventBox from "@/app/components/EventBox.jsx";
import HeaderSection from "@/app/components/HeaderSection";


const page = async () => {
  return (
    <div>
      <HeaderSection />
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-[#449C95]">FUTURE EVENTS</h2>
        <div className="w-full flex justify-around gap-4 flex-wrap  mt-12">
          <EventBox />
          <EventBox />
          <EventBox />
          <EventBox />
        </div>
      </div>
    </div>
  );
};

export default page;
