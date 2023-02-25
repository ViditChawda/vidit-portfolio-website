import React, { useEffect } from 'react'
import Header from '../Header/Header'
import "./Home.css"
import * as THREE from "three";

const Home = () => {
  useEffect (() =>{

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color : 0x00ff00})

    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }

    camera.position.z = 5;
    mesh.rotation.y = 1;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);

    
  }, [])

  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
    </div>
  )
}

export default Home