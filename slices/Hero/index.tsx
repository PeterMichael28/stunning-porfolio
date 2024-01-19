'use client';

import Bounded from '@/components/Bounded';
import { renderLetters } from '@/utils/helpers';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import {Shapes} from './Shapes'
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
 const component = useRef(null);

 useEffect(() => {
  let ctx = gsap.context(() => {
   // create as many GSAP animations and/or ScrollTriggers here as you want...
   gsap
    .timeline()
    .fromTo(
     '.name-animation',
     { x: -100, opacity: 0, rotate: -10 },
     {
      x: 0,
      opacity: 1,
      rotate: 0,
      ease: 'elastic.out(1,0.3)',
      duration: 1,
      transformOrigin: 'left top',
      stagger: { each: 0.1, from: 'random' },
     },
    )
    .fromTo(
     '.job-title',
     {
      y: 20,
      opacity: 0,
      scale: 1.2,
     },
     {
      opacity: 1,
      y: 0,
      duration: 1,
      scale: 1,
      ease: 'bounce.out',
     },
    );
  }, component);

  return () => ctx.revert(); // cleanup!
 }, []);


  

 return (
  <Bounded
   data-slice-type={slice.slice_type}
   data-slice-variation={slice.variation}
   ref={component}
  >
   <div className="grid h-[60vh] grid-cols-1 place-items-center place-content-center md:grid-cols-2 max-w-7xl mx-auto px-3 md:px-0">
    <div className="col-start-1 row-start-1">
     <h1
      className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
      aria-label={
       slice.primary.first_name + ' ' + slice.primary.last_name
      }
     >
      <span className="block text-slate-300 ">
       {renderLetters(slice.primary.first_name, 'first')}
      </span>
      <span className="-mt-[.2em] block text-slate-500  ">
       {renderLetters(slice.primary.last_name, 'last')}
      </span>
     </h1>

     <span className="job-title block bg-gradient-to-tr from-yellow-600 via-yellow-200 to-yellow-600 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
      {slice.primary.description}
     </span>
    </div>

    <Shapes />
   </div>
  </Bounded>
 );
};

export default Hero;
