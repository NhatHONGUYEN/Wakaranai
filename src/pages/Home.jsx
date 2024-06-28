import womanVideo from "../assets/images/womanVideo (2).mp4";

export default function Home() {
  return (
    <div className="w-full h-screen">
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
}
