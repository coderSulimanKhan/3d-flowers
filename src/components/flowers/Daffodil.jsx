import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { MTLLoader, OBJLoader } from "three/addons"
import { Suspense, useRef } from "react"
import { OrbitControls } from "@react-three/drei";
import Loading from "../Loading";

const DaffodilModel = () => {
  // import materials
  const daffodilMaterials = useLoader(MTLLoader, "/3d-flowers/flowers/daffodil/daffodil.mtl");
  daffodilMaterials.preload();

  // import model
  const daffodilRef = useRef();
  const daffodilObj = useLoader(OBJLoader, "/3d-flowers/flowers/daffodil/daffodil.obj", (obj) => {
    obj.setMaterials(daffodilMaterials);
  });

  // set position
  daffodilObj.position.set(0, -7.5, 0);
  daffodilObj.rotation.set(-Math.PI / 2, 0, 0);

  // Animations
  useFrame(() => {
    if (daffodilRef.current) {
      daffodilRef.current.rotation.z += 0.01;
    }
  });

  return <primitive object={daffodilObj} ref={daffodilRef} scale={1} />
}

const Daffodil = ({isOrbitControls}) => {
  return (
    <Canvas>
      <ambientLight intensity={4} />
      <Suspense fallback={<Loading />}>
        <directionalLight position={[5, 10, 7]} intensity={1} />
        <DaffodilModel />
        {
          isOrbitControls && <OrbitControls />
        }
      </Suspense>
    </Canvas>
  )
}

export default Daffodil