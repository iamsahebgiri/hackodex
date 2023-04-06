import { useState, useEffect } from "react";
import { SponsorsType, CommunityType, sponsor, clubs, community, sponsorevent, communityevent, clubsEvents } from "../seed";

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
      
      <h3 className="font-semibold text-[#e3c598]">Sponsor Event</h3>
      <div className="flex flex-wrap mx-auto justify-center rounded-md w-full overflow-hidden mb-5">
      {sponsorevent.map((data) => (
             <div key={data.id} className="rounded-lg mx-3 my-1 p-2 backdrop-blur-lg backdrop-filter overflow-hidden justify-center mt-5">
             <a href={data.url} className="flex">
               <div className="my-auto mx-3">
               <h1 className="rounded-md text-[#d58345] text-start text-3xl font-semibold">
                 {data.name} 
               </h1>
               <p className="text-[#e3c598] md:text-left text-sm ml-1">{data.date}</p>
               <p className="text-[#e3c598] md:text-left text-sm ml-1">{data.time}</p>
               <p className="text-[#e3c598] md:text-left text-sm ml-1">{data.venue}</p>
               </div>
             </a>
           </div>
          ))}
          {/* <h1 className="animate-pulse text-2xl ml-4 my-2 font-semibold text-[#d58345]">Coming Soon...</h1> */}
      </div>

      <h3 className="font-semibold text-[#e3c598]">Community Event</h3>
      <div className="flex flex-wrap mx-auto justify-center rounded-md w-full overflow-hidden mb-5">
        {/* {communityevent.map((data) => (
            <div key={data.id} className="rounded-lg mx-3 my-1 p-2 backdrop-blur-lg backdrop-filter overflow-hidden justify-center mt-5">
              <a href={data.url}>
                <h1 className="rounded-md bg-sky-500/[.09] hover:bg-cyan-600 text-white px-2">
                  {data.name}
                  </h1>
              </a>
            </div>
          ))} */}
          <h1 className="animate-pulse text-2xl ml-4 my-2 font-semibold text-[#d58345]">Coming Soon...</h1>
      </div>
          
      <h3 className="font-semibold text-[#e3c598]">Clubs Events</h3>
      <div className="flex flex-wrap mx-auto justify-center rounded-md w-full overflow-hidden mb-5">
          {clubsEvents.map((data) => (
            <div key={data.id} className="rounded-lg mx-3 my-1 p-2 backdrop-blur-lg backdrop-filter overflow-hidden justify-center mt-5">
              <a href={data.url} className="flex">
                <div className="my-auto mx-3">
                <h1 className="rounded-md text-[#d58345] text-start text-3xl font-semibold">
                  {data.name} 
                </h1>
                <p className="text-[#e3c598] md:text-left text-sm ml-1">{data.date}</p>
                <p className="text-[#e3c598] md:text-left text-sm ml-1">{data.time}</p>
                <p className="text-[#e3c598] md:text-left text-sm ml-1">{data.venue}</p>
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
