import { Html, useProgress } from '@react-three/drei';

const Loading = () => {
  const { active } = useProgress();

  return (
    <Html center>
      {
        active ?
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-4 border-t-orange-800 border-orange-500 rounded-full animate-spin"></div>
          </div> : ""
      }
    </Html>
  );
};

export default Loading;
