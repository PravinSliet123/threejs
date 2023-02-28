import { Affix, Button, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
  const {SlideRight, setSlideRigth, zoom, setZoom,spine, setSpine,resetPose,setresetPose,pose, setPose,rotation, setRotation,zoomType, setZoomType,setIsZoom}  = useCharacterAnimations()
  return (
    <Affix position={{ bottom: 50, right: 20 }}>
      {/* <Stack>
        {animations.map((animation, index) => (
          <Button
            key={animation}
            variant={index === animationIndex ? "filled" : "light"}
            onClick={() => setAnimationIndex(index)}
          >
            {animation}
          </Button>
        ))}
      </Stack> */}
      <Stack>
   
          <Button onClick={()=>{setRotation(rotation+5)}}>⭕+</Button>
          <Button onClick={()=>{setRotation(rotation-5)}}>⭕-</Button>
          <Button onClick={()=>{setRotation(90)}}>left</Button>
          <Button onClick={()=>{setRotation(-90)}}>right</Button>
          <Button onClick={()=>{setRotation(190)}}>Back</Button>
          <Button onClick={()=>{setRotation(0)}}>Front</Button>
          <Button onClick={()=>{setZoom(zoom+1)}}> +</Button>
          <Button onClick={()=>{setZoom(zoom-1)}}> -</Button>
          <Button onClick={()=>{setSlideRigth(SlideRight+.1)}}> {'>'}</Button>
          <Button onClick={()=>{setSlideRigth(SlideRight-.1)}}> {'<'}</Button>
          <Button onClick={()=>setSpine(spine- 0.1)}>🧑🏿‍🤝‍🧑🏿</Button>
          <Button onClick={()=>setSpine(spine+ 0.1)}>🧑🏿</Button>
          <Button onClick={()=>setPose(pose+ 0.1)}>pose</Button>
          <Button onClick={()=>{setresetPose(!resetPose);setZoomType("");setIsZoom(false)}}>Reset</Button>
    
      </Stack>
    </Affix>
  );
};

export default Interface;
