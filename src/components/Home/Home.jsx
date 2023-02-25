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

    const moonGeometry = new THREE.SphereGeometry(2, 64 ,  64);

    const moonMaterial = new THREE.MeshStandardMaterial({color : 0xffffff});

    const pointLight = new THREE.PointLight(0xffffff, 1);

    const mesh = new THREE.Mesh(moonGeometry, moonMaterial);

    scene.add(mesh);

    scene.add(pointLight);

    pointLight.position.z = 10;

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }

    animate();

  
    // mesh.rotation.y = 1;

    // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.render(scene, camera);

    
  }, [])

  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
    </div>
  )
}

export default Home