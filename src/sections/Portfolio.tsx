import Image from "next/image";
import Ss from "../assets/ss.png";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <div className="card big">
        <Image src={Ss} alt="portfolio project" />
      </div>
      <div className="card big">
        <Image src={Ss} alt="portfolio project" />
      </div>
      <div className="card big">
        <Image src={Ss} alt="portfolio project" />
      </div>
    </div>
  );
}
