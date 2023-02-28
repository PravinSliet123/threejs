import { createContext, useContext, useState } from "react";
const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const [animationIndex, setAnimationIndex] = useState(1);
  const [animations, setAnimations] = useState([]);
  const [focus, setFocus] = useState({})

  const [zoomType, setZoomType] = useState("");
  const [zoom, setZoom] = useState(60);
  const [isZoom, setIsZoom] = useState(false);
  const [spine, setSpine] = useState(1)
  const [pose, setPose] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [resetPose, setresetPose] = useState(false)
  const [SlideLeft, setSlideLeft] = useState(0);
  const [SlideRight, setSlideRigth] = useState(0);


  return (
    <CharacterAnimationsContext.Provider
      value={{
        zoomType, setZoomType,
        isZoom, setIsZoom,
        focus, setFocus,
        rotation, setRotation,
        pose, setPose,
        resetPose, setresetPose,
        spine, setSpine,
        SlideLeft, setSlideLeft,
        SlideRight, setSlideRigth,
        zoom, setZoom,
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
