import transition from "../animations/transitions";
import womanVideo from "../assets/images/videowoman.mp4";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
      <video
        src={womanVideo}
        autoPlay
        loop
        muted
        controls={false}
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default transition(Home);
