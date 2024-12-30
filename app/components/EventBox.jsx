import Link from 'next/link';
import React from 'react'

const EventBox = () => {
  return (
    <div className="w-[450px] flex flex-col gap-7 mt-5">
      <img src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951243.jpg" className='rounded-md' />
      <h2 className="text-xl font-bold">
        Exploring the Vibrant Palette of Rwandan Art
      </h2>
      <p>
        Join us for a captivating journey through the artistic tapestry of
        Rwanda as we proudly present an exclusi ve exhibition showcasing the
        diverse and vibrant world of Rwandan art. This immersive experience
        celebrates the rich cultural heritage and creativity of this East
        African nation.
      </p>
      <Link
        href="#"
        className="w-32 py-1 text-center text-[#449C95] border-2 border-[#449C95] rounded-md hover:bg-[#449C95] hover:text-white"
      >
        MORE INFO
      </Link>
    </div>
  );
}

export default EventBox