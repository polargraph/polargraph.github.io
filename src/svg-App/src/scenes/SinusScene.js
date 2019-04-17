import * as THREE from 'three';

export default class SinusScene extends THREE.Group {
    constructor(gui) {
        super();

        this.opacity = 1;

        gui.add(this, 'opacity', 0, 1);

        this.material = new THREE.LineBasicMaterial ( {color:0x000000, transparent:true, depthWrite:false, linewidth : 1 } ); 
        
        let xDiv = 11;
        let yDiv = 11;
        let zDiv = 1;

        let x1 = 20.0; // 20
        let x2 = 2.0;
        let y1 = 20.0; // 20
        let y2 = 2.0;
        let z1 = 300.0;
        let z2 = 100; // 100

        this.geometry = new THREE.Geometry();
        for(let i=0; i< 4000; i++) {
            this.geometry.vertices.push( new THREE.Vector3(Math.sin(i/x1) * ((i/x2) / xDiv), Math.cos(i/y1) * ((i/y2) / yDiv) , Math.sin(z1-i/z2)* (z1 / zDiv)) );
        }
        this.line = new THREE.Line (this.geometry, this.material);
        this.add( this.line );
        
    }

    update(timeStamp, x, y, cam) {
        this.line.material.opacity = this.opacity;

    }

    getVertices() {
        return this.geometry.vertices;
    }

    
}