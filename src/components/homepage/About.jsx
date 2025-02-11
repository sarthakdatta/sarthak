import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/default.jpg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    <section ref={aboutSection} aria-label="about me" id="about">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
               Who am I?
            </h3>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
              I am an intermediate software developer with a passion for creating efficient and problem-solving applications.

              <br></br>
              <br></br>I am a passionate high school student with a keen interest in programming and a strong foundation in Python, NodeJS, and ReactJS.
              <br></br>
              <br></br>
              When I'm not coding, you can find me managing <a 
                href="https://logiclabacademy.github.io/" 
                className="text-primary-500 font-bold hover:text-primary-700 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
              >
                Logic Lab Academy
              </a>
              , a math and coding nonprofit for underprivileged students, or teaching math to nuero-diverse students around the world. 
              
                  a math and coding nonprofit for underprivileged students, or teaching math to nuero-diverse students around the world. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
