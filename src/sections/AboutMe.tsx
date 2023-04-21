import Card from "../components/Card";
import Image from "next/image";
import CirclesPNG from "../assets/Circles.png";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div id="aboutMe">
      <div id="aboutMeLeft">
        <Image src={CirclesPNG} alt="circle illustration" />
      </div>
      <div id="aboutMeRight">
        <motion.div
          initial={{
            rotate: "-3deg",
          }}
          whileHover={{
            rotate: "0deg",
          }}
        >
          <Card />
        </motion.div>
        <motion.div
          initial={{
            rotate: "1deg",
          }}
          whileHover={{
            rotate: "0deg",
          }}
        >
          <Card />
        </motion.div>
        <motion.div
          initial={{
            rotate: "-2deg",
          }}
          whileHover={{
            rotate: "0deg",
          }}
        >
          <Card />
        </motion.div>
      </div>
    </div>
  );
}
