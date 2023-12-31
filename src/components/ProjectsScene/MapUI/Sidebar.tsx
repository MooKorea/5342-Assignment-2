import { useCameraContext } from "../../Contexts";
import { motion, easeInOut } from "framer-motion";
import { styled } from "styled-components";
import { useEffect } from "react";
import Scroll from "../../../assets/sounds/Scroll.ogg";
import { projectData } from "../../../assets/ProjectContent";

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: calc(-6em - 1em);
  height: 3em;
  width: 6em;
  display: flex;
  border-radius: 40px;
  overflow: hidden;
  z-index: 3;
  `

const Button = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffffb9;
  pointer-events: all;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #ffffff90;
  }
`
function NavigateButtons() {
  const { currentPos, setCurrentPos, setFocus, plotWorldPositions } = useCameraContext();
  const audio = new Audio(Scroll)
  const handleNavigation = (direction:number) => {
    if (currentPos === 0 && direction === -1) return
    if (currentPos === plotWorldPositions.length - 1 && direction === 1) return
    setCurrentPos(currentPos + direction)
    audio.play()
  }
  
  useEffect(() => {
    setFocus(plotWorldPositions[currentPos])
  }, [currentPos])

  return (
    <ButtonContainer>
      <Button onClick={() => handleNavigation(-1)}/>
      <Button onClick={() => handleNavigation(1)}/>
    </ButtonContainer>
  )
}

const SidebarContainer = styled(motion.div)`
  @media (min-width: 1200px) {
    left: calc(15vw - 100px);
    height: calc(100vh - 8em);
    top: 4em;
    width: 25vw;
    border-radius: 2em;
  }

  position: absolute;
  left: 0;
  height: 100%;
  width: 350px;
  background: radial-gradient(circle, #ddfcf8a7 0%, rgba(161, 187, 209, 0.144) 100%);
  backdrop-filter: blur(50px);
  padding: 2em;
  box-shadow: inset 0 0 10rem #ffffff;
  pointer-events: all;
  filter: drop-shadow(0 0 2rem #26746176);
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Sidebar() {
    const { isZoom, currentPos } = useCameraContext();
    return (
      <SidebarContainer
        initial={{opacity: 0}}
        animate={{ opacity: isZoom ? 1 : 0, x: isZoom ? 0 : -100 }}
        transition={{ ease: easeInOut, duration: 0.7 }}
      >
        <NavigateButtons />
        <h2><a href={projectData[currentPos].link} target="_blank">{projectData[currentPos].title}</a></h2>
        <p>
          A drop shadow is effectively a blurred, offset version of the input image's alpha
          mask, drawn in a specific color and composited below the image.
        </p>
      </SidebarContainer>
    );
  }