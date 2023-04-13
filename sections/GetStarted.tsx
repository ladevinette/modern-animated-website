"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { startingFeatures } from "../constants";
import { TitleText, TypingText } from "@/components/CustomText";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import Image from "next/image";
import StartSteps from "@/components/StartSteps";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.4, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 h-[500px]  sm:h-[800px]`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter} `}
      >
        <Image
          src="/get-started.png"
          alt="get-started"
          className="w-[100%] h-[100%] object-contain"
          fill
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="|How Metaversus Works" textStyles="text-center" />
        <TitleText
          title={<>Get started with just a few clicks</>}
          textStyles="text-center"
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
