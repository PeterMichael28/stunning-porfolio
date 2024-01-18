"use client"

import Bounded from "@/components/Bounded";
import SectionHeading from "@/components/SectionHeading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, {useLayoutEffect, useRef} from 'react'
import {MdCircle} from 'react-icons/md'
/**
 * Props for `MySkills`.
 */
export type MySkillsProps = SliceComponentProps<Content.MySkillsSlice>;

/**
 * Component for "MySkills" Slices.
 */
const MySkills = ({ slice }: MySkillsProps): JSX.Element => {

   const component = useRef(null);


   useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
          markers: true
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wrapper overflow-hidden"
      ref={component}
    >
     <Bounded as="div">
        <SectionHeading size="xl" className="mb-8" as="h2">
          {slice.primary.heading}
        </SectionHeading>
      </Bounded>

        {slice.items.map(({ tech_color, skill_name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={skill_name || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                }
                style={{
                  color: index === 7 && tech_color ? tech_color : "inherit",
                }}
              >
                {skill_name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default MySkills;
