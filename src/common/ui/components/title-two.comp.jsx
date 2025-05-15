import clsx from "clsx";
import React from "react";
import {easeOut, motion} from "framer-motion"
function TitleTwo({title, borderColor}) {
  return (
    <motion.div initial={{x: -40}} animate={{x:0}} exit={{x:-40}} transition={{duration: 0.7, ease: easeOut}} className={clsx("text-2xl md:text-4xl font-semibold mb-4 border-l-4 border-primary px-8", borderColor)}>
      {title}
    </motion.div>
  );
}

export default TitleTwo;
