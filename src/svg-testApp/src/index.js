import Stats from 'stats-js';
import CustomScene from './objects/Scene.js';
import * as utils from './utils.js';

const scene = new THREE.Scene();
const cScene = new CustomScene();
scene.add(cScene);

const renderer = new THREE.SVGRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ); 

const stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom

let camera = new THREE.PerspectiveCamera( 33, window.innerWidth / window.innerHeight, 0.1, 100 );
camera.position.z = 10;

utils.test();

// ------------------------- animation ---------------------------

const onAnimationFrameHandler = (timeStamp) => {
    cScene.update(timeStamp, x, y, camera);
    renderer.render( scene, camera );

    stats.begin();
    stats.end();
    window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);


// ------------------------- interaction -------------------------

let x, y;

const onMouseMove = ( event ) => {
    x = ( event.clientX / window.innerWidth );
    y = ( event.clientY / window.innerHeight );
}



window.addEventListener( 'mousemove', onMouseMove, false );

// ------------------------- html related -------------------------
document.body.style.margin = 0;
document.body.appendChild( renderer.domElement );
document.body.appendChild( stats.dom );
