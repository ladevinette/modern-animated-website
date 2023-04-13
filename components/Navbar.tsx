"use client";

import { motion } from "framer-motion";
import styles from "../styles/index";
import { navVariants } from "@/utils/motion";
import Image from "next/image";
import searchImage from "../public/search.svg";
import menuImage from "../public/menu.svg";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="sm:px-16 px-6 py-8 relative"
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src={searchImage}
        alt="search"
        className="w-[24px] h-[24px] object-contain"
        width={100}
        height={100}
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSES
      </h2>
      <Image
        src={menuImage}
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
        width={100}
        height={100}
      />
    </div>
  </motion.nav>
);

export default Navbar;
