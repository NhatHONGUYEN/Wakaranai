import womanVideo from "/Womanvideo (2).mp4";
import HomeVideo from "../components/home/HomeVideo";
import HomeTitle from "../components/home/HomeTitle";
import { useState } from "react";

export default function App() {
  const [videoSrc, setVideoSrc] = useState(womanVideo);

  return (
    <div className="w-full h-screen relative bg-slate-50">
      <div className="relative h-screen ">
        {/* This is the Link and the title with the switch of the video */}
        <div className="mx-auto  max-w-7xl">
          <div className="relative z-10 pt-14  lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-screen w-80 translate-x-1/2 transform fill-slate-100 lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <HomeTitle setVideoSrc={setVideoSrc} />
          </div>
        </div>
        {/* This is the initial video of introduction */}
        <HomeVideo videoSrc={videoSrc} />
      </div>
    </div>
  );
}
