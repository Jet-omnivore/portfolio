import { ScrollTrigger } from 'gsap/all';
import Hero from './components/Hero'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <>
      <Hero /> 
    </>
  )
}

export default App
