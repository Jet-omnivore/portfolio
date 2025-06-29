import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Showcase from "./Showcase";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
//import Spline from '@splinetool/react-spline';


gsap.registerPlugin(useGSAP, ScrollTrigger);

function HeroText({divClass="", textClass="", ariaHidden=false}) {
  return (
    <div aria-hidden={ariaHidden} className={`w-full h-full flex justify-center items-center absolute ${divClass}`}>
      <h1 className={`font-semibold relative hero-text ${textClass}`}>Jet Omnivore</h1>
    </div>
  );
}

//function Jet() {

  //function onLoad(spline) {
    //const spacecraft = spline.findObjectByName('jet'); 
    //if (spacecraft == undefined) return;
    //gsap.to(spacecraft.rotation, {
      //repeat: -1,
      //angle: Math.PI,
      //duration: 0.8
    //})
  //}

  //return (
    //<Spline onLoad={onLoad} scene="https://prod.spline.design/xh7GX4GtHviHlf-C/scene.splinecode" />
  //);
//}

export default function Hero() {

  useGSAP(() => {
    //gsap.to(".hero-text", {
        //scale: 50,
        //transformOrigin: "56.02% 60%",
        //fontSize: "16vw",
        //duration: 1.5,
        //delay: 3,
        //yoyo: true,
      //}
    //);

    //gsap.to(".upper-hero-text", {
      //duration: 0,
      //repleat: -1,
      //yoyo: true,
      //delay: 3,
      //color: "black",
    //})
  });

  return (
    <div className="relative">
      <section className="h-screen relative overflow-hidden"> 
        <HeroText ariaHidden={true} divClass="-z-100 mix-blend-multiply bg-black" />
        <HeroText divClass="mix-blend-screen bg-secondary" textClass="upper-hero-text"/>
    {/*<Jet/>*/}
      </section>

      <Showcase/>

    </div>
  )
}
