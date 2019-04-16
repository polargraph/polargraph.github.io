import Stats from 'stats-js';
import * as THREE from 'three';
import CustomScene from './objects/Scene.js';
import * as utils from './utils.js';

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

const onKeyDown = (event) => {
    if(event.key == "c") {
    	exportSVG(renderer.domElement, "lines_" + Math.random(1000));
    }
}

// --------------------------- save svg ---------------------------
function generateLink(fileName, data) {
    let link = document.createElement('a');
    link.download = fileName;
    link.href = data;
    return link;
}

function exportSVG(element, fileName) {
    let svg = element;
    let svgString;
    if (window.ActiveXObject) {
      svgString = svg.xml;
    } else {
      let oSerializer = new XMLSerializer();
      svgString = oSerializer.serializeToString(svg);
    }
    generateLink(fileName + '.svg', 'data:image/svg+xml;utf8,' + svgString).click();
}



window.addEventListener( 'mousemove', onMouseMove, false );
window.addEventListener("keydown", onKeyDown, false);

// ------------------------- html related -------------------------
document.body.style.margin = 0;
document.body.appendChild( renderer.domElement );
//document.body.appendChild( stats.dom );
