import * as THREE from "three";
import React, { useRef, useMemo } from "react";
// A THREE.js React renderer, see: https://github.com/drcmda/react-three-fiber
import { useRender } from "react-three-fiber";
// A React animation lib, see: https://github.com/react-spring/react-spring

export default function Stars() {
  let group = useRef();
  let theta = 0;

  useRender(() => {
    // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
    const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.01)));
    group.current.rotation.set(r, r, r);
  });


  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("lightblue"),
    });
    const coords = new Array(2000)
      .fill()
      .map(i => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ]);
    return [geo, mat, vertices, coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}
