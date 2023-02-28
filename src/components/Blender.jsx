/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Blender.gltf
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCharacterAnimations } from '../contexts/CharacterAnimations'
import { MeshStandardMaterial } from 'three'

export default function Model(props) {
  const { nodes, materials, MCH_kneeTarL_Manny_Armature} = useGLTF('./models/Blender.gltf')
  const { SlideRight, setSlideRigth, zoom, setZoom, spine, setSpine, resetPose, pose,setPose,rotation, setRotation,focus, setFocus,isZoom, setIsZoom,zoomType, setZoomType} = useCharacterAnimations()
  console.log('nodes',nodes)
  
  const rotate = useRef()
  useEffect(() => {
    spineChange()
  }, [spine])
  useEffect(()=>{

    rotate.current.rotation.y = rotation/20

  },[rotation])
  useEffect(()=>{

    rotate.current.position.x = SlideRight/20

  },[SlideRight])
  const spineChange = () => {
    nodes.HEAD.position.z = pose * 2
    nodes.HEAD.position.z = spine *2
    // nodes.HUMERUSL.rotation.x = spine
    // nodes.HUMERUSR.rotation.x = spine*1/16
    nodes.VERTEBRAE_C2.position.z = -spine * 1 / 4

    nodes.VERTEBRAE_C3.position.z = spine * 1 / 4
    nodes.VERTEBRAE_C4.position.z = spine * 1 / 4
    nodes.VERTEBRAE_C5.position.z = spine * 1 / 4
    nodes.VERTEBRAE_C6.position.z = spine * 1 / 8
    nodes.VERTEBRAE_C7.position.z = spine * 1 / 8

    nodes.VERTEBRAE_L1.position.z = spine * 1 / 2
    nodes.VERTEBRAE_L2.position.z = spine * 1 / 2
    nodes.VERTEBRAE_L3.position.z = spine * 1 / 2
    nodes.VERTEBRAE_L4.position.z = spine * 1 / 2
  }
  useEffect(() => {
    setPose(0)
    setSpine(0)
  }, [resetPose])
  useEffect(() => {
    Straight()
   

  }, [pose])
  const Straight = () => {

    // nodes.CONTROL_FOOTL.children[0].position.z = 20
    nodes.FEMURL.rotation.z = -pose* 1 / 2
    nodes.FEMURR.rotation.z = pose* 1 / 2
    // nodes.TIBIAL.position.z = pose * 1 / 4
    // nodes.TIBIAL.position.z = pose * 1 / 4
    nodes.TIBIAL.position.x = pose*2
    nodes.TIBIAR.position.x = -pose*2
    // nodes.FOOTR.rotation.z = -pose * 1 / 4
    // nodes.FOOTL.rotation.z = -pose * 1 / 4
    // nodes.CONTROL_FOOTL.rotation.z = -pose * 1 / 4
    // nodes.CONTROL_FOOTR.rotation.z = -pose * 1 / 4
    nodes.TIBIAR.position.z = -pose * 1 / 4
    // nodes.TIBIAR.position.z = pose * 1 / 4
    nodes.ULNA_TARL.rotation.x = pose* 1 / 4
    // nodes.STERNUM.position.z = pose //shoulders
    nodes.Scene.position.z = pose //shoulders
   

  }
  const viewTozzom = (z)=>{
    setFocus(z)
    setIsZoom(!isZoom)
    setZoomType('Head')
    
   
  }
  const ZoomToChest = (z)=>{
    setFocus(z)
    setIsZoom(!isZoom)
    setZoomType('Chest')
    
  }
  return (
    <group {...props} dispose={null} rotation={[0, 0, 0]} scale={0.05} ref = {rotate}>

      <skinnedMesh onClick={(e)=>viewTozzom(e.object.position)} geometry={nodes.BONES_HEAD.geometry} material={materials.Material} skeleton={nodes.BONES_HEAD.skeleton} >
        <meshStandardMaterial opacity={1} color='black' />
      </skinnedMesh>
      <skinnedMesh  geometry={nodes.BONES_ARMR.geometry} material={materials.Material} skeleton={nodes.BONES_ARMR.skeleton} >
        <meshStandardMaterial opacity={1} color='#ccc' />
      </skinnedMesh>
      <skinnedMesh  geometry={nodes.BONES_LEGL.geometry} material={materials.Material} skeleton={nodes.BONES_LEGL.skeleton} >
        <meshStandardMaterial opacity={1} color='green' />
      </skinnedMesh>
      <skinnedMesh geometry={nodes.BONES_LEGR.geometry} material={materials.Material} skeleton={nodes.BONES_LEGR.skeleton} >
        <meshStandardMaterial opacity={1} color='#ccc' />
      </skinnedMesh>
      <skinnedMesh geometry={nodes.BONES_ARML.geometry} material={materials.Material} skeleton={nodes.BONES_ARML.skeleton} >
        <meshStandardMaterial opacity={1} color='#ccc' />
      </skinnedMesh>
      <skinnedMesh geometry={nodes.BONES_SPINE.geometry} material={materials.Material} skeleton={nodes.BONES_SPINE.skeleton} >
        <meshStandardMaterial opacity={1} color='#ccc' />
      </skinnedMesh>
      <skinnedMesh geometry={nodes.BONES_PELVIS.geometry} material={materials.Material} skeleton={nodes.BONES_PELVIS.skeleton} >
        <meshStandardMaterial opacity={1} color='#ccc' />
      </skinnedMesh>
      <skinnedMesh onClick={(e)=>ZoomToChest(e.object.position)} geometry={nodes.BONES_RIBCAGE.geometry} material={materials.Material} skeleton={nodes.BONES_RIBCAGE.skeleton} >
        <meshStandardMaterial opacity={1} color='blue' />
      </skinnedMesh>
      <primitive object={nodes.MCH_elbowL} />
      <primitive object={nodes.MCH_armIKtarL} />
      <primitive object={nodes.MCH_elbowR} />
      <primitive object={nodes.MCH_armIKtarR} />
      <primitive object={nodes.PIV_HIPS} />
      <primitive object={nodes.MCH_kneeTarR} />
      <primitive object={nodes.CONTROL_FOOTR} />
      <primitive object={nodes.MCH_kneeTarL} />
      <primitive object={nodes.CONTROL_FOOTL} />
      <primitive object={nodes.CONTROL_HIPS} />

      {/* <mesh scale={[10, -10, 1]} position={[0, 10, 0]} >
        <planeBufferGeometry attach="geometry" args={[7, 7, 7]} />
        <meshStandardMaterial opacity={.4} transparent />
      </mesh> */}
      <mesh   rotateX={90} position={[0, 0, 0]} scale={[10, -10, 1]} >
        <planeBufferGeometry  attach="geometry" args={[10, 10, 20]} />
        <meshStandardMaterial color='#000' opacity={.5} transparent />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/Blender.gltf')
