"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi I'm Brian. I'm currently pursing a {" "}
        <span className="font-medium">Computer Science</span> degree. I'm interested in{" "}
        <span className="font-medium">full-stack web development</span> but lately I've been just trying new things.{" "}
        <span className="italic">My favorite part of programming</span> is that there's always something to 
        learn. I also enjoy the
        feeling of finally figuring out a solution to a problem.
        I am always looking to
        learn new technologies!
      </p>

      <p>
        <span className="italic">When I'm not studying</span>, I enjoy playing
        basketball, going to the gym, watching the UFC, and eating KBBQ. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "} backend development.
      </p>
    </motion.section>
  );
}
