import AdnanSVG from "../components/AdnanSVG";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Top() {
  return (
    <div className="wrapper-in center">
      {/* LINES SVG */}
      <svg
        id="lines"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 1080"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
      >
        <motion.path
          d="M0,823.803084q174.634297,99.008924,358.675411,43.504462C542.716525,811.803084,945.24106,309.168233,1390.889909,293.758452c125.615364-4.343566,257.073303,72.906951,337.688667,156.017852c54.157852,55.834368,191.421423,125.717338,191.421423,125.717338"
          transform="translate(.000001 54.000001)"
          fill="none"
          stroke="#e53170"
          stroke-width="3.84"
          initial={{ strokeDasharray: "0 0 0 0" }}
          animate={{
            strokeDasharray: ["0 0 100 0", "0 359 0 0", "359 0 0 0"],
          }}
          transition={{
            delay: 4,
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
        <motion.path
          d="M0,855.803084q156.634297,198.008924,340.675411,142.504462C524.716525,942.803084,945.24106,284.168233,1390.889909,268.758452c125.615364-4.343566,278.5424,111.269993,382.688667,264.017852c43.819313,64.268326,146.421423,118.717338,146.421423,118.717338"
          transform="translate(.000001-87.999999)"
          fill="none"
          stroke="#e53170"
          stroke-width="3.84"
          initial={{ strokeDasharray: "0 0 0 0" }}
          animate={{
            strokeDasharray: ["0 0 100 0", "0 359 0 0", "359 0 0 0"],
          }}
          transition={{
            delay: 4.3,
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
        <motion.path
          d="M0,823.803084q146.634297,153.008924,330.675411,97.504462C514.716525,865.803084,945.24106,284.168233,1390.889909,268.758452c125.615364-4.343566,250.050488,77.233276,382.688667,206.017852c52.583175,51.05545,146.421423,109.717338,146.421423,109.717338"
          transform="translate(.000001 0.000001)"
          fill="none"
          stroke="#e53170"
          stroke-width="3.84"
          initial={{ strokeDasharray: "0 0 0 0" }}
          animate={{
            strokeDasharray: ["0 0 100 0", "0 359 0 0", "359 0 0 0"],
          }}
          transition={{
            delay: 4.6,
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
      </svg>
      <div id="top">
        <div id="topLeft">
          <h1>
            HEY! <span>I&apos;m</span> <AdnanSVG />
            <br />
            <span>Website</span> developer.
          </h1>
          <p>
            Agency quality websites with the personal touch of a freelancer.
          </p>
          <div id="topButtons">
            <Link href="#">
              <FaGithub />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div id="topRight">
          <motion.div
            className="circle white"
            initial={{
              width: "0%",
              top: "100%",
            }}
            animate={{
              width: "70%",
              top: "50%",
            }}
            whileHover={{
              width: "80%",
            }}
            transition={{
              duration: 0.8,
              ease: "backInOut",
            }}
          />
          <motion.div
            className="square one primary"
            initial={{ scale: 0, top: "100%", left: "50%" }}
            animate={{
              scale: 1,
              top: "20%",
              left: "10%",
              rotate: "-215deg",
            }}
            transition={{
              duration: 1.5,
              ease: "backInOut",
            }}
          />
          <motion.div
            className="square two primary"
            initial={{ scale: 0, top: "100%", left: "50%" }}
            animate={{
              scale: 1,
              top: "60%",
              left: "70%",
              rotate: "-180deg",
            }}
            transition={{
              duration: 1.8,
              ease: "backInOut",
            }}
          />
          <motion.div
            className="square three secondary"
            initial={{ scale: 0, top: "100%", left: "50%" }}
            animate={{
              scale: 1,
              top: "50%",
              left: "75%",
              rotate: "107deg",
            }}
            transition={{
              duration: 2,
              ease: "backInOut",
            }}
          />
          <motion.div
            className="square four secondary"
            initial={{ scale: 0, top: "100%", left: "50%" }}
            animate={{
              scale: 1,
              top: "80%",
              left: "20%",
              rotate: "236deg",
            }}
            transition={{
              duration: 0.4,
              ease: "backInOut",
            }}
          />
          <motion.div
            className="square five tertiary"
            initial={{ scale: 0, top: "100%", left: "50%" }}
            animate={{
              scale: 1,
              top: "30%",
              left: "70%",
              rotate: "374deg",
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          />
          <motion.div
            className="square six tertiary"
            initial={{ scale: 0, top: "100%", left: "50%" }}
            animate={{
              scale: 1,
              top: "50%",
              left: "25%",
              rotate: "248deg",
            }}
            transition={{
              duration: 2.2,
              ease: "backInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}
