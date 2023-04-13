"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "@/components/CustomText";
import { staggerContainer, fadeIn } from "../utils/motion";
import Image from "next/image";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.4, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col  h-[500px]  sm:h-[800px]`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play togetherin the same
            world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image src="/map.png" alt="map" className="w-full object-cover" fill />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <Image
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
            fill
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <Image
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
            fill
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <Image
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
            fill
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
