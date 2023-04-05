import { timelineData } from "../seed";

const Timeline = () => {
  const { events } = timelineData;

  return (
    <div className=" mx-auto mt-6">
      {events.map((event) => (
        <div key={event.id} className="relative pb-8">
          <div className="relative flex space-x-3">
            <div className="h-8 w-8 rounded-full bg-[#f59a44] flex items-center justify-center z-10">
              <span className="text-white font-medium">{event.id}</span>
            </div>
            <div className="min-w-0 flex-1 pt-1.5 flex justify-between">
              <div className="text-sm text-[#cf5230]">
                <time dateTime={event.date}>{event.date}</time>
              </div>
              <div className="text-right text-sm text-[#f59a44]">
                {event.title}
              </div>
            </div>
          </div>
          <div className="mt-4 ml-12">
            <p className="text-base text-[#e3c598]">{event.description}</p>
          </div>
          {event.id !== events.length && (
            <div
              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-[#cf5230]"
              aria-hidden="true"
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;


