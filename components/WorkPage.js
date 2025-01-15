"use client";
import WorkItem from "@/components/WorkItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import IMG3 from "@/images/work9.png";
import IMG4 from "@/images/work8.png";
import IMG5 from "@/images/work7.png";


const workList = [
  
  {
    id: 3,
    title: "NaukriAdda",
    type: "- Job Portal",
    img: IMG3,
    url: "https://naukri-adda-frontend.vercel.app/",
  },
  {
    id: 4,
    title: "Learnify",
    type: "- E-Learning Plateform",
    img: IMG4,
    url:  "https://learnify-weld-three.vercel.app/",
  },
  {
    id: 5,
    title: "SatisfiedJob",
    type: "- Job Portal",
    img: IMG5,
    url: "https://satisfiedjob.com/",
  },
 
];

const WorkPage = () => {
  const workRef = useRef();
  useGSAP(
    () => {
      const bodyHasLoadedClass = document.body.classList.contains("loaded");
      const delayValue = bodyHasLoadedClass ? 0 : 2.5;
      const workTimeline = gsap.timeline();
      workTimeline
        .from(".small-title span", {
          opacity: 0,
          skewY: 7,
          y: "100%",
          duration: 0.6,
          ease: "power3",
          delay: delayValue,
        })
        .from(
          ".big-title span",
          {
            opacity: 0,
            skewY: 2,
            y: "50%",
            duration: 0.4,
            ease: "power3",
          },
          "-=0.2"
        );
    },
    {
      scope: workRef,
    }
  );
  return (
    <section
      className="pt-[var(--section-lg-padding)] pb-[var(--section-padding)] bg-[url('./../images/bg.png')] bg-center bg-repeat"
      ref={workRef}
    >
      <div className="container  mt-[-20px] lg:mt-[-40px]">
        <div className="small-title">
          <span className="inline-block">RECENT WORK</span>
        </div>
        <div className="text-[calc(clamp(3rem,1.385rem+6.8906vw,8rem)*0.75)] leading-none font-light lg:mb-40 big-title">
          <span className="inline-block">
           Worldsoft IT Solution Pvt.Ltd.
          </span>
        </div>
        <div className="  mt-4 w-full h-36"></div>
        <div className=" grid lg:grid-cols-2 gap-12 lg:gap-18 xl:gap-24 mt-8 lg:mt-12">
          {workList.map((item) => {
            return <WorkItem key={item.id} work={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default WorkPage;
