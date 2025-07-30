import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import Loading from "../Loading";
import { OrbitControls } from "@react-three/drei";

const EnglishHollyModel = () => {
  const englishHollyRef = useRef();

  // import materials
  const englishHollyMaterials = useLoader(MTLLoader, "/flowers/english_holly/english_holly.mtl");
  englishHollyMaterials.preload();

  // import model and apply textures
  const englishHollyObj = useLoader(OBJLoader, "/flowers/english_holly/english_holly.obj", (obj) => {
    obj.setMaterials(englishHollyMaterials);
  });

  // set position
  englishHollyObj.position.set(0, -2, 0);
  englishHollyObj.rotation.set(-Math.PI / 4, 0, 0);

  // Animations
  useFrame(() => {
    if (englishHollyRef.current) {
      englishHollyRef.current.rotation.z += 0.01;
    }
  })

  return <primitive object={englishHollyObj} ref={englishHollyRef} scale={0.2} />
}


const EnglishHolly = ({isOrbitControls}) => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={4} />
        <Suspense fallback={<Loading />}>
          <EnglishHollyModel />
          {
            isOrbitControls && <OrbitControls />
          }
        </Suspense>
      </Canvas>
    </>
  )
}

export default EnglishHolly