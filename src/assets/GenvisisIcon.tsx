/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/GenvisisIcon.glb -t -r public 
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane002: THREE.Mesh
    Plane002_1: THREE.Mesh
  }
  materials: {
    LightBlue: THREE.MeshStandardMaterial
    DarkBlue: THREE.MeshStandardMaterial
  }
}

export function GenvisisIcon(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/GenvisisIcon.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane002.geometry} material={materials.LightBlue} />
      <mesh geometry={nodes.Plane002_1.geometry} material={materials.DarkBlue} />
    </group>
  )
}

useGLTF.preload('/GenvisisIcon.glb')