import { Link } from "react-router-dom";
import RetroGrid from "../animations/RetroGrid";

export default function NotFinish() {
  return (
    <>
      <div className="fixed inset-0  flex items-center justify-center overflow-hidden bg-background">
        <Link className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          SORRY THIS PAGE IS NOT FINISHED <br /> YET
        </Link>

        <RetroGrid />
      </div>
    </>
  );
}
