import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { MTLLoader, OBJLoader } from "three/addons"
import { Suspense, useRef } from 'react'
import { Environment, OrbitControls } from '@react-three/drei';
import Loading from '../Loading';

const CrocusModel = () => {
  // import materials
  const crocusMaterials = useLoader(MTLLoader, "/3d-flowers/flowers/crocus/crocus.mtl");
  crocusMaterials.preload();

  // import 3d model
  const crocusRef = useRef();
  const crocusObj = useLoader(OBJLoader, "/3d-flowers/flowers/crocus/crocus.obj", (obj) => {
    obj.setMaterials(crocusMaterials);
  });

  // set its position
  crocusObj.position.set(0, -2, 0);
  crocusObj.rotation.set(-Math.PI / 4, 0, 0);

  // Animations
  useFrame(() => {
    if (crocusRef.current) {
      crocusRef.current.rotation.z += 0.01;
    }
  });

  return <primitive object={crocusObj} ref={crocusRef} scale={0.11} />
}

const Crocus = ({ isOrbitControls }) => {
  return (
    <Canvas>
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={4} />
        <directionalLight position={[5, 10, 7]} intensity={1} />
        <CrocusModel />
        <Environment preset="sunset" />
        {
          isOrbitControls && <OrbitControls />
        }
      </Suspense>
    </Canvas>
  )
}

export default Crocus