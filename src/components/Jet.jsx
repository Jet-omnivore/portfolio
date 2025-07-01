import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera} from '@react-three/drei'
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

export default function Jet(props) {
  const jetRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.set(jetRef.current.position, {y: 8, z: -2})
        .set(jetRef.current.rotation, {x: Math.PI/2})
        
        .to(jetRef.current.position, {
          delay: 0.8,
          duration: 2,
          z: 0,
          ease: "linear",
        })
        .to(jetRef.current.position, {
          duration: 2,
          y: 0,
          ease: CustomEase.create("custom", "M0,0 C0,0.408 0.213,0.7 0.263,0.753 0.507,1.014 0.665,1 1,1 "),
        }, "<")
        .to(jetRef.current.rotation, {
          duration: 2,
          x: Math.PI/10,
          ease: "power1.out"
        }, "<")
        .to(jetRef.current.rotation, {
          duration: 1.4,
          z: -2 * Math.PI - Math.PI/64,
          ease: "power1.inOut"
        }, "<0.4")
        .fromTo(jetRef.current.rotation,
          {
            z: -Math.PI/64
          },
          {
            duration: 0.8,
            z: Math.PI/64,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          }
        )
        .to(jetRef.current.position, {
          duration: 1.2,
          y: "+=0.1",
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        }, "<")

    }, jetRef);


    return () => ctx.revert();

  }, []);


  const { nodes } = useGLTF('/jet.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={220}>
          <mesh ref={jetRef}
            castShadow
            receiveShadow
            geometry={nodes.mesh_0.geometry}
          >
           <meshStandardMaterial color={0xFFD1D1C7} transparent opacity={0.8} />  
         </mesh>
        </group>
        <directionalLight intensity={0.7} decay={2} position={[-1, 1, 0.8]} />
        <PerspectiveCamera
          makeDefault={false}
          far={100000}
          near={70}
          fov={45}
          position={[61.446, 184.439, 447.25]}
          rotation={[0, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/jet.gltf')
