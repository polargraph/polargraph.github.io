import Stats from 'stats-js';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import * as dat from 'dat.gui';
 
import SinusScene from './scenes/SinusScene.js';
import * as utils from './utils.js';


window.onload = function() {
    var Params = function() {
        this.rendererWidth = 420;
        this.rendererHeight = 594;
        this.exportSVG = function() { 
            utils.saveAsSVG( cScene.getVertices(), camera, params.rendererWidth, params.rendererHeight, "export.svg" );
        }
    }

    let params = new Params();
    
    const gui = new dat.GUI();
    gui.domElement.id = 'gui';
    let controllerWidth = gui.add(params, 'rendererWidth', 100, 3000);
    let controllerHeight = gui.add(params, 'rendererHeight', 100, 3000);
    gui.add( params, 'exportSVG');

    const scene = new THREE.Scene();
    const cScene = new SinusScene(gui);
    scene.add(cScene);

    var container = document.getElementById( 'canvas' );

    const renderer = new THREE.WebGLRenderer({antialias: true});
    //const rendererWidth = container.getBoundingClientRect().width;
    //const rendererHeight = container.getBoundingClientRect().height; //container.offsetHeight;
    
    renderer.setSize( params.rendererWidth, params.rendererHeight ); 
    renderer.setClearColor( 0xffffff, 1);


    const stats = new Stats();
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom

    let camera = new THREE.PerspectiveCamera( 45, params.rendererWidth / params.rendererHeight, 0.1, 10000 );
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

        controllerWidth.onChange(function(value) {
            renderer.setSize(params.rendererWidth, params.rendererHeight);
            camera.aspect = params.rendererWidth/ params.rendererHeight;
            camera.updateProjectionMatrix();
            renderer.domElement.style.left = container.getBoundingClientRect().width/2 - params.rendererWidth/2 + 'px';
        });

        controllerHeight.onChange(function(value) {
            renderer.setSize(params.rendererWidth, params.rendererHeight);
            camera.aspect = params.rendererWidth/ params.rendererHeight;
            camera.updateProjectionMatrix();
            renderer.domElement.style.top = container.getBoundingClientRect().height/2 - params.rendererHeight/2 + 'px';
        });

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
            utils.saveAsSVG( cScene.getVertices(), camera, params.rendererWidth, params.rendererHeight, "export.svg" );
        }
    }

    window.addEventListener( 'mousemove', onMouseMove, false );
    window.addEventListener("keydown", onKeyDown, false);

    // ------------------------- html related -------------------------
    document.body.style.margin = 0;
    renderer.domElement.style.left = container.getBoundingClientRect().width/2 - params.rendererWidth/2 + 'px';
    renderer.domElement.style.top = container.getBoundingClientRect().height/2 - params.rendererHeight/2 + 'px';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.boxShadow = '10px 10px 19px 0px rgba(0,0,0,0.23)';
    container.appendChild( renderer.domElement );
    
    //document.body.appendChild( renderer.domElement );
    //document.body.appendChild( stats.dom );

}










