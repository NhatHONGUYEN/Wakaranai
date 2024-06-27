import transition from "../animations/transitions";
import womanVideo from "../assets/images/videowoman.mp4";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <NavBar />
      <div className="absolute inset-0 bg-gradient-to-b from-black opacity-60"></div>

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
