import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import { useCharacterAnimations } from "./contexts/CharacterAnimations";
import * as THREE from 'three';
import CameraControls from 'camera-controls'
CameraControls.install({ THREE })
function App() {
  const { SlideRight, setSlideRigth, zoom, setZoom, rotation, focus, setFocus, isZoom,zoomType } = useCharacterAnimations()
  console.log(isZoom, "isZoom")
  // -------------------for head
if(zoomType =='head')
{
  
}
  function ControlsHead({pos = new THREE.Vector3(), look = new THREE.Vector3() }) {
    const camera = useThree((state) => state.camera)
    const gl = useThree((state) => state.gl)
    const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
    return useFrame((state, delta) => {
      isZoom ? pos.set(focus.x, focus.y+1.2, focus.z + .5) : pos.set(0, 0,3)
      isZoom ? look.set(focus.x, focus.y, focus.z - 1) : look.set(0, 0, 2)

      state.camera.position.lerp(pos, 0.5)
      state.camera.updateProjectionMatrix()

      controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
      return controls.update(delta)
    })
  }
  function Controls({pos = new THREE.Vector3(), look = new THREE.Vector3() }) {
    return(
      <OrbitControls position={[0,0,0]} scale= {1}/>
    )
  }
  function ControlsChest({pos = new THREE.Vector3(), look = new THREE.Vector3() }) {
    const camera = useThree((state) => state.camera)
    const gl = useThree((state) => state.gl)
    const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
    return useFrame((state, delta) => {
      isZoom ? pos.set(focus.x, focus.y+.5, focus.z + .4) : pos.set(0, 0,3)
      isZoom ? look.set(focus.x, focus.y, focus.z - 3.5) : look.set(0, 0, 2)

      state.camera.position.lerp(pos, 0.5)
      state.camera.updateProjectionMatrix()

      controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
      return controls.update(delta)
    })
  }
 
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",

      }}
    >
      {/* camera={{fov:zoom , left: 100, position: [0, rotation, 2]}} */}
      <Canvas style={{ height: "80vh", width: "50vw", backgroundColor: "#CBE9FE" }} camera={{ fov: 60, zoom: 1, left: 100, position: [0, rotation, 2], }} >

        <Experience />

        <axesHelper args={[10, 30, 0xff0000, '#185EB6']} scale={1.5} />
        <gridHelper args={[10, 30, 0xff0000, '#185EB6']} position={[0, -1, -2]} />
        {
          zoomType==='Head'?<ControlsHead/>:zoomType ==='Chest'?<ControlsChest/>:<Controls/>
        }
      </Canvas>
      <Interface />
    </div>
  );
}

export default App;
