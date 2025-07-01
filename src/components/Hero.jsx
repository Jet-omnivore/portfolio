import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer, SplitText } from "gsap/all";
import CustomEase from 'gsap/CustomEase';

function Icon() {
  return (
    <>
      <div className="m-3 w-[38px] h-[38px] mix-blend-difference bg-text-accent rounded-full"></div>
    </>
  )
}

export default function Hero() {

  useGSAP(() => {
    
    CustomEase.create("easeInBack", "0.36, 0, 0.66, -0.56");

    const split = SplitText.create(".split-char", {
      type: "chars",
      charsClass: "char++"
    });

    const nextPageTl = gsap.timeline({duration: 0.5});
    nextPageTl.to('.username', {
      x: "150vw",
      ease: "easeInBack",
      })
    .to('body', {
      backgroundSize: 0,
      ease: "easeInBack"
    }, "<0.2")
    .to('.subtitle', {
      x: "-50vw",
      ease: "easeInBack",
    }, "<-0.2")
    .pause()
     

    Observer.create(
    {
      type: "wheel",
      target: "hero",
      onWheel: (self) => {
        if (self.deltaY > 0) nextPageTl.play()
        else nextPageTl.reverse();
      }
    });


    gsap.from(split.chars, {
      autoAlpha: 0.5,
      yPercent: 105,
      ease: "elastic.out",
      delay: 0.2,
      duration: 1,
      stagger: 0.1
    });
    
  })

  return (
    <section id="hero" className="w-full h-full relative overflow-hidden">
      <nav className="flex justify-end py-4 px-12 navbar">
        <Icon /> 
        <Icon /> 
        <Icon /> 
      </nav>
      <div className="absolute bottom-[0] w-full flex justify-center">
        <div>
        <h3 className="mb-[2em] text-text-secondary split-lines subtitle">I build games, apps, websites, and graphics.</h3>
        <h1 className="mix-blend-difference text-[min(12vw,230px)] leading-[0.684] text-text-accent split-char username"> <strong>JET OMNIVORE</strong> </h1>
        </div>
      </div>
    
    </section>
  )
}
