"use client";

import { motion } from "framer-motion";
import styles from "../styles/index";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { exploreWorlds } from "@/constants";
import { TitleText, TypingText } from "@/components/CustomText";
import { useState } from "react";
import { ExploreCard } from "@/components/ExploreCard";

const Explore = () => {
  const [active, setActive] = useState<string>("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className="md:block hidden" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              world={world}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
