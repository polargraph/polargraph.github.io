import Stats from 'stats-js';
import * as THREE from 'three';
import CustomScene from './objects/Scene.js';
import * as utils from './utils.js';
import OrbitControls from 'three-orbitcontrols';

const scene = new THREE.Scene();
const cScene = new CustomScene();
scene.add(cScene);

const renderer = new THREE.WebGLRenderer();
const rendererWidth = 297;
const rendererHeight = 420;
renderer.setSize( rendererWidth, rendererHeight ); 
renderer.setClearColor( 0xffffff, 1);

const stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom

let camera = new THREE.PerspectiveCamera( 45, rendererWidth / rendererHeight, 0.1, 10000 );
camera.position.z = 900;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;

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

const onKeyDown = (event) => {
    if(event.key == "s") {

        

        utils.saveAsSVG(cScene.customLines.geometry.vertices, camera, rendererWidth, rendererHeight, "export.svg");
    }
}

window.addEventListener( 'mousemove', onMouseMove, false );
window.addEventListener("keydown", onKeyDown, false);

// ------------------------- html related -------------------------
document.body.style.margin = 0;
document.body.appendChild( renderer.domElement );
//document.body.appendChild( stats.dom );















