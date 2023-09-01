import React, { useEffect } from 'react';
import EarthMap from '../assets/8081_earthmap2k.jpg';
import EarthCloudMap from '../assets/8k_earth_clouds.jpg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Html, OrbitControls, Text } from '@react-three/drei';

const AnimatedSphere = ({ lat, lon, city }) => {
  // const lat = 15.4;
  // const lon = 73.8;
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthMap, EarthCloudMap]
  );

  function getCoordinates(lat, lng) {
    // convert latitude and longitude to Phi and Theta
    const Phi = (90 - lat) * (Math.PI / 180);
    const Theta = (lng + 180) * (Math.PI / 180);
    const x = -(Math.sin(Phi) * Math.cos(Theta));
    const y = Math.cos(Phi);
    const z = Math.sin(Phi) * Math.sin(Theta);
    return { x, y, z };
  }

  const pin = getCoordinates(lat, lon);

  return (
    <>
      <ambientLight intensity={4} />
      <mesh>
        <sphereGeometry args={[2.5, 100, 100]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls
          enableRotate={true}
          enableZoom={false}
          enablePan={true}
          // zoomSpeed={0.6}
          rotateSpeed={0.4}
          panSpeed={0.5}
        />
        <mesh key={pin.x} position={[pin.x * 2.5, pin.y * 2.5, pin.z * 2.5]}>
          <Html>
            <div className='font-mono text-2xl font-bold text-white'>
              {city}
            </div>
          </Html>
          <sphereGeometry args={[0.1, 20, 20]} />
          <meshStandardMaterial color='#ff0000' />
        </mesh>
      </mesh>
    </>
  );
};

export default AnimatedSphere;
