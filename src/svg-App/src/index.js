import Stats from 'stats-js';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import * as dat from 'dat.gui';
 
import SinusScene from './scenes/SinusScene.js';
import * as utils from './utils.js';

window.onload = function() {

    const gui = new dat.GUI();
    const scene = new THREE.Scene();
    const cScene = new SinusScene(gui);
    scene.add(cScene);

    var container = document.getElementById( 'canvas' );

    const renderer = new THREE.WebGLRenderer();
    const rendererWidth = container.getBoundingClientRect().width;
    const rendererHeight = container.getBoundingClientRect().height; //container.offsetHeight;
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
            utils.saveAsSVG( cScene.getVertices(), camera, rendererWidth, rendererHeight, "export.svg" );
        }
    }

    window.addEventListener( 'mousemove', onMouseMove, false );
    window.addEventListener("keydown", onKeyDown, false);

    // ------------------------- html related -------------------------
    document.body.style.margin = 0;

    //document.body.appendChild( container );

    container.appendChild( renderer.domElement );
    //document.body.appendChild( renderer.domElement );
    //document.body.appendChild( stats.dom );

}










