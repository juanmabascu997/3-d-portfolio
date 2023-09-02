import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";

import imagen from "../../assets/imagen/yo2.png"

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }

  },[])

  return (
    <div className="flex flex-col justify-center items-end mt-5 mr-40">
      <img src={imagen} alt="computers" />
    </div>
  );
};

export default ComputersCanvas;
