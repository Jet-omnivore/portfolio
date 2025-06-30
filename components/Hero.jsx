import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";


function Icon() {
  return (
    <>
      <div className="m-3 w-[38px] h-[38px] mix-blend-difference bg-text-accent rounded-full"></div>
    </>
  )
}

export default function Hero() {

  useGSAP(() => {
    const split = SplitText.create(".split-char", {
      type: "chars",
      charsClass: "char++"
    });

    gsap.from(split.chars, {
      autoAlpha: 0.5,
      yPercent: 105,
      ease: "elastic.out",
      delay: 0.2,
      duration: 1,
      stagger: 0.1
    });
    
    //let tl = gsap.timeline();

    ////tl.from(
      ////".char1", {
        ////autoAlpha: 0,
        ////x: -50,
      ////}
    ////);
  
    //tl.from(
      //".char1, .char4", {
        //duration: 0.6,
        //autoAlpha: 0.5,
        //ease: "bounce.out",
        //delay: 0.2,
        //yPercent: -200
      //}
    //).from(".char2, .char3, .char5, .char6, .char7, .char8, .char9, .char10, .char11", {
      //autoAlpha: 0,
      //yPercent: 100,
      //ease: "elastic.out",
      //duration: 1,
      //stagger: 0.05
    //}, "-=0.4")
     
  })

  return (
    <section id="hero" className="bg-[linear-gradient(var(--color-text-accent))] bg-no-repeat bg-right bg-size-[50%] w-full h-full relative overflow-hidden">
      <nav className="flex justify-end py-4 px-12">
        <Icon /> 
        <Icon /> 
        <Icon /> 
      </nav>
      <div className="absolute bottom-[0] w-full flex justify-center">
        <div>
        <h3 className="mb-[2em] text-text-secondary split-lines">I build games, apps, websites, and graphics.</h3>
        <h1 className="mix-blend-difference text-[min(12vw,230px)] leading-[0.684] text-text-accent split-char"> <strong>JET OMNIVORE</strong> </h1>
        </div>
      </div>
    
    </section>
  )
}
