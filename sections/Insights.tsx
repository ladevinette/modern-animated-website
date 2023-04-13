"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "@/components/CustomText";
import { staggerContainer } from "../utils/motion";
import Image from "next/image";
import { insights } from "@/constants";
import InsightCard from "@/components/InsightCard";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.4, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col  h-[500px]  sm:h-[800px]`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            insight={insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
