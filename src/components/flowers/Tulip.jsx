import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { MTLLoader, OBJLoader } from "three/addons"
import { Suspense, useRef } from 'react'
import { Environment, OrbitControls } from '@react-three/drei';
import Loading from '../Loading';

const TulipModel = () => {
  // import materials
  const tulipMaterials = useLoader(MTLLoader, "/flowers/tulip/tulip.mtl");
  tulipMaterials.preload();

  // import 3d model
  const tulipRef = useRef();
  const tulipObj = useLoader(OBJLoader, "/flowers/tulip/tulip.obj", (obj) => {
    obj.setMaterials(tulipMaterials);
  });

  // set its position
  tulipObj.position.set(0, -2.5, 0);
  tulipObj.rotation.set(-Math.PI / 5, 0, 0);

  // Animations
  useFrame(() => {
    if (tulipRef.current) {
      tulipRef.current.rotation.z += 0.01;
    }
  });

  return <primitive object={tulipObj} ref={tulipRef} scale={0.28} />
}

const Tulip = ({isOrbitControls}) => {
  return (
    <Canvas>
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={4} />
        <directionalLight position={[5, 10, 7]} intensity={1} />
        <TulipModel />
        <Environment preset="sunset" />
        {
          isOrbitControls && <OrbitControls />
        }
      </Suspense>
    </Canvas>
  )
}

export default Tulip