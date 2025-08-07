import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import Loading from "../Loading";
import { OrbitControls } from "@react-three/drei";

const SnowDropModel = () => {
  const snowDropRef = useRef();

  // import materials
  const snowDropMaterials = useLoader(MTLLoader, "/3d-flowers/flowers/snow_drop/snow_drop.mtl");
  snowDropMaterials.preload();

  // import model
  const snowDropObj = useLoader(OBJLoader, "/3d-flowers/flowers/snow_drop/snow_drop.obj", (obj) => {
    obj.setMaterials(snowDropMaterials);
  });

  // set position and rotation
  snowDropObj.position.set(0.1, -12, 0);
  snowDropObj.rotation.set(-Math.PI / 1.5, 0, 0);

  // Animations
  useFrame(() => {
    if (snowDropRef.current) {
      snowDropRef.current.rotation.z += 0.01;
    }
  })

  return <primitive object={snowDropObj} ref={snowDropRef} scale={2.5} />
}

const SnowDrop = ({ isOrbitControls }) => {
  return (
    <Canvas>
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={2} />
        <SnowDropModel />
        {
          isOrbitControls && <OrbitControls />
        }
      </Suspense>
    </Canvas>
  )
}

export default SnowDrop