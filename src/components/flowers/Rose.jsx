import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { Environment, OrbitControls, useFBX, useTexture } from "@react-three/drei"
import Loading from "../Loading";

function FlowerModel() {
  const flowerRef = useRef();
  const obj = useFBX("/flowers/rose/rose.fbx");

  // set the position
  obj.position.set(0, -4.5, 0);
  obj.rotation.set(Math.PI / 8, Math.PI / 6, 0);

  // textures
  const stem = useTexture("/flowers/rose/stem.jpg");
  const leaves = useTexture("/flowers/rose/leaves.jpg");
  const petals = useTexture("/flowers/rose/petals.jpg");

  obj.traverse((child) => {
    if (child.isMesh) {
      if (child.name == "pCylinder1") {
        child.material.map = stem;
      } else if (child.name == "pCube1" || child.name == "pCube2" || child.name == "pCube3") {
        child.material.map = leaves;
      } else if (child.name == "Mesh") {
        child.material.map = petals;
      }
    }
  });

  // Animations
  useFrame(() => {
    if (flowerRef.current) {
      flowerRef.current.rotation.y += 0.01;
    }
  });
  return <primitive object={obj} ref={flowerRef} scale={0.08} />;
}

const Rose = ({ isOrbitControls }) => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Suspense fallback={<Loading />}>
        <FlowerModel />
        <Environment preset="sunset" />
        {
          isOrbitControls && <OrbitControls />
        }
      </Suspense>
    </Canvas>
  )
}

export default Rose