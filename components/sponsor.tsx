import { useState, useEffect } from "react";
import { SponsorType, sponsors } from "../seed";

const LOGO_WIDTH = 20; // in rem
const LOGO_MARGIN = 2; // in rem
const MAX_LOGOS_PER_PAGE = 4;
const ANIMATION_DURATION = 5000; // in milliseconds

const Carousel = () => {
  const [page, setPage] = useState(0);

  const numPages = Math.ceil(sponsors.length / MAX_LOGOS_PER_PAGE);

  useEffect(() => {
    // Automatically go to next page after a certain amount of time
    const timeoutId = setTimeout(() => {
      if (page < numPages - 1) {
        setPage((prevPage) => prevPage + 1);
      } else {
        setPage(0);
      }
    }, ANIMATION_DURATION);

    return () => clearTimeout(timeoutId);
  }, [page, numPages]);

  const visibleLogos = sponsors.slice(
    page * MAX_LOGOS_PER_PAGE,
    page * MAX_LOGOS_PER_PAGE + MAX_LOGOS_PER_PAGE
  );

  const numVisibleLogos = visibleLogos.length;

  const totalWidth =
    numVisibleLogos * LOGO_WIDTH + (numVisibleLogos - 1) * LOGO_MARGIN;

  return (
    <div className="h-20 m-2">
      <div className="flex absolute w-full justify-center">
        <div
          className="flex justify-between items-center px-8 sm:px-16"
          style={{ width: `${totalWidth}rem` }}
        >
          {visibleLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex-none rounded-lg overflow-hidden w-full justify-center"
              style={{ width: `${LOGO_WIDTH}rem`, marginRight: `${LOGO_MARGIN}rem` }}
            >
              <img src={logo.logo} alt={logo.name} className="h-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
