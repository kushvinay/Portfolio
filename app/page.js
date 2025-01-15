"use client";
import FlipLink from "@/components/FlipLink";
import Timer from "@/components/Timer";
import WorkItem from "@/components/WorkItem";
import IMG2 from "@/images/work9.png";
import IMG3 from "@/images/work7.png";
import IMG4 from "@/images/work8.png";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import BtnLink from "@/components/BtnLink";

const workList = [
  {
    id: 2,
    title: "NaukriAdda",
    type: "- Job Portal",
    img: IMG2,
    url: "https://naukri-adda-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "SatisfiedJob",
    type: "- Job Portal",
     img: IMG3,
     url: "https://satisfiedjob.com/",
  },
  {
    id: 4,
    title: "Learnify",
    type: "- E-Learning Platform",
    img: IMG4,
    url:  "https://learnify-weld-three.vercel.app/",
  },
];

export default function Home() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();

  useGSAP(
    () => {
      const bodyHasLoadedClass = document.body.classList.contains("loaded");
      const delayValue = bodyHasLoadedClass ? 0 : 2.5;
      const heroTl = gsap.timeline();
      heroTl
        .from(".blob-container", {
          opacity: 0,
          scale: 0,
          duration: 0.6,
          delay: delayValue,
        })
        .from(".heroTitle span", {
          opacity: 0,
          y: "100%",
          duration: 0.4,
          ease: "power3",
        })
        .from(".heroTitle2 span, .heroTitle3 span", {
          opacity: 0,
          y: "100%",
          duration: 0.4,
          ease: "power3",
        })
        .to(
          ".heroTitle2 span",
          {
            x: "-10%",
            duration: 0.4,
            ease: "power3",
          },
          "title23"
        )
        .to(
          ".heroTitle3 span",
          {
            x: "10%",
            fontStyle: "italic",
          },
          "title23"
        )
        .from(
          ".heroFlipLink",
          {
            stagger: 0.1,
            y: 30,
            opacity: 0,
          },
          "-=1.2"
        );
    },
    {
      scope: heroRef,
    }
  );
  useGSAP(
    () => {
      gsap.from(".small-title span", {
        opacity: 0,
        skewY: 7,
        y: "100%",
        duration: 0.6,
        ease: "power3",
        delay: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "clamp(top 60%)",
        },
      });
      gsap.from(".content", {
        opacity: 0,
        skewY: 2,
        y: "50%",
        duration: 0.6,
        ease: "power3",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".content",
          start: "clamp(top 60%)",
        },
      });
      gsap.from(".btn", {
        opacity: 0,
        skewY: 2,
        y: "50%",
        duration: 0.6,
        ease: "power3",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".btn",
          start: "clamp(top 60%)",
        },
      });
    },
    {
      scope: aboutRef,
    }
  );
  useGSAP(
    () => {
      gsap.from(".small-title span", {
        opacity: 0,
        skewY: 7,
        y: "100%",
        duration: 0.6,
        ease: "power3",
        delay: 0.2,
        scrollTrigger: {
          trigger: workRef.current,
          start: "clamp(top 60%)",
        },
      });
      gsap.from(".content", {
        opacity: 0,
        skewY: 2,
        y: "50%",
        duration: 0.6,
        ease: "power3",
        scrollTrigger: {
          trigger: ".content",
          start: "clamp(top 60%)",
        },
      });
      gsap.from(".btn", {
        opacity: 0,
        skewY: 2,
        y: "100%",
        duration: 0.6,
        ease: "power3",
        scrollTrigger: {
          trigger: ".btn",
          start: "clamp(top 80%)",
        },
      });
    },
    {
      scope: workRef,
    }
  );
  return (
    <>
      <section
        className="pt-[73px] bg-[url('./../images/bg.png')] bg-center bg-repeat"
        style={{ backgroundSize: "60px" }}
        ref={heroRef}
      >
        <div className="container min-h-[calc(100svh-73px)] flex flex-col">
          <div className="mt-auto text-center font-oswald text-[clamp(3.3rem,1.1359rem+9.2334vw,10rem)]">
            <div className="font-extrabold leading-none overflow-hidden heroTitle growCircle">
              <span className="inline-block">VINAY KUSHWAHA</span>
            </div>
            <div className="font-thin leading-none growCircle">
              <div className="overflow-hidden heroTitle2">
                <span className="inline-block px-4">MERN STACK</span>
              </div>
              <div className="overflow-hidden heroTitle3 growCircle">
                <span className="inline-block px-4">DEVELOPER</span>
              </div>
            </div>
          </div>
          <div className="mt-auto flex items-center justify-between py-4 flex-col lg:flex-row">
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/kushvinay"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <FlipLink className="heroFlipLink growCircle">Github</FlipLink>
              </Link>
              <Link
                href="https://www.linkedin.com/in/vinay-kushwaha-35a461246"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <FlipLink className="heroFlipLink growCircle">
                  LinkedIn
                </FlipLink>
              </Link>
              <Link href="mailto:kushvinay19@gmail.com">
                <FlipLink className="heroFlipLink growCircle">Gmail</FlipLink>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="heroFlipLink">India - BHOPAL</div>
              <Timer className="heroFlipLink" />
            </div>
          </div>
        </div>
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
      </section>
      <section className="section-padding bg-background" ref={aboutRef}>
        <div className="container">
          <div className="grid lg:grid-cols-2 fap-8">
            <div className="space-y-4">
              <div className="small-title overflow-hidden">
                <span className="inline-block">INTRODUCTION</span>
              </div>
            </div>
            <div className="col-span- space-y-6">
              <p className="content">
                I&apos;m a passionate Mern Full Stack Developer with 2+ years of
                experience in crafting visually appealing, user-friendly web
                applications
              </p>
              <p className="content">
                My expertise includes React.js, Next.Js, Node.JS, Express.JS, and modern web
                technologies like Tailwind CSS.
              </p>
              <div className="flex gap-4 flex-col lg:flex-row items-start">
                <BtnLink
                  href="/about"
                  text="More about me"
                  hoverColor="var(--btn-hover-color)"
                  textColor="var(--foreground)"
                  hoverTxtColor="#fff"
                >
                  <svg
                    className="rotate-45 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                  </svg>
                </BtnLink>
                <BtnLink
                  // href="/sachin-01oct2024-updated-resume.pdf"
                  href="/updatedCV.pdf"

                  target="_blank"
                  referrerPolicy="no-referrer"
                  text="Download Resume"
                  hoverColor="var(--btn-hover-color)"
                  textColor="var(--foreground)"
                  hoverTxtColor="#fff"
                >
                  <svg
                    className="rotate-45 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                  </svg>
                </BtnLink>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section
        className="section-padding bg-[var(--dark)] text-[var(--foreground)] dark:text-[var(--background)]"
        ref={workRef}  
      >
        <div className="container pt-0 lg:pt-6 ">
          <div className="small-title mb-4 lg:mb-8 ">
            <span className="inline-block">RECENT WORK</span>
          </div>
          <div className="w-full mb-6 lg:mb-8">
            <p className="content">
              A collection of my most recent and creative web experiences
            </p>
          </div>
            <div className="w-full mt-6 h-52 "></div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {workList.map((item) => {
              return <WorkItem key={item.id} work={item} />;
            })}
          </div>
          <div className="mt-8 lg:mt-2 text-center"  >
          <BtnLink
            href="/work"
            text="VIEW ALL PROJECTS"
            hoverColor="var(--btn-hover-color)"
            textColor="var(--foreground)"
            hoverTxtColor="#fff"
            className="mt-8 lg:mt-12"
          >
            <svg
              className="rotate-45 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 7l-10 10"></path>
              <path d="M8 7l9 0l0 9"></path>
            </svg>
          </BtnLink>
          </div>
        </div>
      </section>
      
      
    </>
  );
}
