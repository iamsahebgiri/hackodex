import { useState, useEffect } from "react";
import { SponsorType, clubs, community } from "../seed";

const Carousel = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="mt-20 md:mt-4">

  <h1 className="mb-3 text-center text-2xl font-semibold text-[#e3c598]">
          Community Partners
    </h1>
    <div className="flex flex-wrap mx-auto justify-center rounded-md w-full overflow-hidden mb-5">
          {community.map((logo) => (
            <div key={logo.id} className="rounded-lg mx-6 my-1 p-2  backdrop-blur-lg backdrop-filter overflow-hidden justify-center mt-5">
              <img src={logo.logo} alt={logo.name} className="h-20" />
            </div>
          ))}
    </div>

    <h1 className="mb-3 mt-24 md:mt-12 text-center text-2xl font-semibold text-[#e3c598]">
          In Collaboration with
    </h1>
    <div className="flex flex-wrap mx-auto justify-center rounded-md w-full overflow-hidden mb-5">
          {clubs.map((logo) => (
            <div key={logo.id} className="rounded-lg mx-6 my-1 p-2  backdrop-blur-lg backdrop-filter overflow-hidden justify-center mt-5">
              <img src={logo.logo} alt={logo.name} className="h-20" />
            </div>
          ))}
    </div>
    </div>
  );
};

export default Carousel;
