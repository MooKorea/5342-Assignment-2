import { Canvas } from "@react-three/fiber";
import { styled } from "styled-components";
import { NoToneMapping } from "three";
import Map from "./Map";
import ProfilePic from "./ProfilePic";
import MapUI from "./MapUI";
import { createContext } from "react";
import { CameraContextProvider } from "./Contexts";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 6;
  position: fixed;
  clip-path: url(#svgPath);
`;
type CameraContext = {
  isFreeLook: boolean;
  setIsFreeLook: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CameraContext = createContext<CameraContext>({} as CameraContext);

export default function Scene() {

  return (
    <CanvasContainer>
      <ProfilePic />
      <CameraContextProvider>
        <Canvas
          camera={{ fov: 35, position: [-5, 10, 15] }}
          gl={{ antialias: true, toneMapping: NoToneMapping }}
        >
          <Map />
        </Canvas>
        <MapUI />
      </CameraContextProvider>
    </CanvasContainer>
  );
}
