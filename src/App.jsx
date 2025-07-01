import { ScrollTrigger, MotionPathPlugin, GSDevTools } from 'gsap/all';
import Hero from './components/Hero'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
import Jet from './components/Jet';
import { CustomEase } from 'gsap/all';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(GSDevTools) 
gsap.registerPlugin(CustomEase)

function App() {


  return (
    <>
      <div className='absolute h-full w-full inset-[0]'>
        <Canvas className='pointer-events-none'>
          <Jet />
        </Canvas>
      </div>
      <Hero /> 
    </>
  )
}

export default App
