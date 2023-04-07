import { useState, useEffect } from "react";
import { SponsorsType, CommunityType, sponsor, clubs, community, events } from "../seed";

const Carousel = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="mt-20 md:mt-4">

    <h1 className="mb-3 text-center text-2xl font-semibold text-[#e3c598]">
          Sponsors
    </h1>
    <div className="flex flex-wrap mx-auto justify-center rounded-md w-full overflow-hidden mb-5">
          {sponsor.map((logo) => (
            <div key={logo.id} className="rounded-lg md:mx-6 mx-3 my-1 p-2  backdrop-blur-lg backdrop-filter overflow-hidden justify-center mt-5">
              <a href={logo.url}>
                <img src={logo.logo} alt={logo.name} className="h-10 max-w-xs" />
              </a>
            </div>
          ))}
    </div>

  <h1 className="mb-3 text-center text-2xl font-semibold text-[#e3c598]">
          Community Partners
    </h1>
    <div className="flex flex-wrap mx-auto justify-center rounded-md w-full overflow-hidden mb-5">
          {community.map((logo) => (
            <div key={logo.id} className="rounded-lg md:mx-6 mx-3 my-1 p-2  backdrop-blur-lg backdrop-filter overflow-hidden justify-center mt-5">
              <a href={logo.url}>
                <img src={logo.logo} alt={logo.name} className="h-20 max-w-xs" />
              </a>
            </div>
          ))}
    </div>

    <h1 className="mb-3 mt-24 md:mt-12 text-center text-2xl font-semibold text-[#e3c598]">
          Clubs in Collaboration
    </h1>
    <div className="flex flex-wrap mx-auto justify-center rounded-md w-full overflow-hidden mb-5">
          {clubs.map((logo) => (
            <div key={logo.id} className="rounded-lg md:mx-6 mx-3 my-1 p-2  backdrop-blur-lg backdrop-filter overflow-hidden justify-center mt-5">
              <a href={logo.url}>
              <img src={logo.logo} alt={logo.name} className="h-20 max-w-xs" />
              </a>
              
            </div>
          ))}
    </div>

    <h1 className="mb-3 text-center text-2xl font-semibold text-[#e3c598]">
          Events
    </h1>
    <div className="flex-row text-center">
      <div className="flex flex-wrap mx-auto justify-center rounded-md w-full overflow-hidden mb-5">
      {events.map((data) => (
            <div key={data.id} className="rounded-lg mx-3 my-1 p-2 backdrop-blur-lg backdrop-filter overflow-hidden justify-center mt-5">
              <a href={data.url} className="flex">
                <div className="my-auto mx-3 bg-white p-6 bg-opacity-10 rounded-lg">
                <h1 className="rounded-md text-[#d58345] text-xl text-center font-semibold">
                  {data.name} 
                </h1>
                <p className="text-[#e3c598] text-sm">{data.date}</p>
                <p className="text-[#e3c598] text-sm">{data.time}</p>
                <p className="text-[#e3c598] text-sm">{data.venue}</p>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>

    </div>
  );
};

export default Carousel;
