"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { newFeatures } from "../constants";
import { TitleText, TypingText } from "@/components/CustomText";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import Image from "next/image";
import NewFeatures from "@/components/NewFeature";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.4, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 h-[500px]  sm:h-[800px]`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What is new?" textStyles="text-center" />
        <TitleText
          title={<>What is new about metaverses?</>}
          textStyles="text-center"
        />
        <div className="mt-[31px] flex flex-wrap justify-beetwen gap-[24px]">
          {newFeatures.map((feature, index) => (
            <NewFeatures key={feature.title} feature={feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter} `}
      >
        <Image
          src="/whats-new.png"
          alt="get-started"
          className="w-[100%] h-[100%] object-contain"
          fill
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
