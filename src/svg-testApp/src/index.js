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


// ---------------------------- export ----------------------------

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

// ------------------------- interaction -------------------------

let x, y;

const onMouseMove = ( event ) => {
    x = ( event.clientX / window.innerWidth );
    y = ( event.clientY / window.innerHeight );
}

const onKeyDown = (event) => {
    
    if(event.key == "s") {

        // save unprojected coordinates 
        let points = [];
        for(let i=0; i< cScene.customLines.geometry.vertices.length; i++) {
            points.push( utils.screenXY(cScene.customLines.geometry.vertices[i], camera, rendererWidth, rendererHeight) );
        }

        let formattedPoints = [];
        for(let i=0; i<points.length; i++) {
            if(i==0) {
                let p = "M" + points[i].x + "," + points[i].y + ",";
                formattedPoints.push(p);
            }
            if(i>0 && i<points.length-2) {
                let p = "L" + points[i].x + "," + points[i].y + ",";
                formattedPoints.push(p);
            }
            if(i==points.length-1) {
                let p = "L" + points[i].x + "," + points[i].y;
                formattedPoints.push(p);
            }
            
        }
        console.log(formattedPoints);
    }
}

window.addEventListener( 'mousemove', onMouseMove, false );
window.addEventListener("keydown", onKeyDown, false);

// ------------------------- html related -------------------------
document.body.style.margin = 0;
document.body.appendChild( renderer.domElement );
//document.body.appendChild( stats.dom );















