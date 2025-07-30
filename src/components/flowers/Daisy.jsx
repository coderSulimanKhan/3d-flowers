import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import { Suspense, useRef } from 'react'
import Loading from '../Loading';
import { OrbitControls } from '@react-three/drei';

const DaisyModel = () => {
  const daisyRef = useRef();
  // import materials
  const daisyMaterials = useLoader(MTLLoader, "/flowers/daisy/materials.mtl");
  daisyMaterials.preload();

  // import 3d model
  const daisyObj = useLoader(OBJLoader, "/flowers/daisy/daisy.obj", (obj) => {
    obj.setMaterials(daisyMaterials);
  });

  // set its position
  daisyObj.position.set(0, -3, 0);
  daisyObj.rotation.set(-Math.PI / 4, 0, 0);

  // Animations
  useFrame(() => {
    if (daisyRef.current) {
      daisyRef.current.rotation.z += 0.01;
    }
  });

  return <primitive object={daisyObj} ref={daisyRef} scale={0.33} />
}

const Daisy = ({ isOrbitControls }) => {
  return (
    <Canvas>
      <ambientLight intensity={4} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Suspense fallback={<Loading />}>
        <DaisyModel />
        {
          isOrbitControls && <OrbitControls />
        }
      </Suspense>
    </Canvas>
  )
}

export default Daisy