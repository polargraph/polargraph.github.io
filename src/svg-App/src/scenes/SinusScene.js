import * as THREE from 'three';

export default class SinusScene extends THREE.Group {
    constructor(gui) {
        super();

        this.opacity = 1;
        this.xDiv = 11;
        this.yDiv = 11;
        this.zDiv = 1;

        this.x1 = 20.0; // 20
        this.x2 = 2.0;
        this.y1 = 20.0; // 20
        this.y2 = 2.0;
        this.z1 = 300.0;
        this.z2 = 100; // 100


        this.c1 = gui.add(this, 'opacity', 0, 1);
        gui.add(this, 'xDiv', 1, 20);
        gui.add(this, 'yDiv', 1, 20);
        gui.add(this, 'zDiv', 1, 20);
        gui.add(this, 'x1', 1, 200);
        gui.add(this, 'x2', 1, 200);
        gui.add(this, 'y1', 1, 200);
        gui.add(this, 'y2', 1, 200);
        gui.add(this, 'z1', 1, 500);
        gui.add(this, 'z2', 1, 500);
        
        this.material = new THREE.LineBasicMaterial ( {color:0x000000, transparent:true, depthWrite:false, linewidth : 1 } ); 
        
        this.geometry = new THREE.Geometry();
        for(let i=0; i< 10000; i++) {
            this.geometry.vertices.push( new THREE.Vector3(Math.sin(i/this.x1) * ((i/this.x2) / this.xDiv), Math.cos(i/this.y1) * ((i/this.y2) / this.yDiv) , Math.sin(this.z1-i/this.z2)* (this.z1 / this.zDiv)) );
        }
        this.line = new THREE.Line (this.geometry, this.material);
        this.add( this.line );
        
    }

    update(timeStamp, x, y, cam, gui) {
        this.line.material.opacity = this.opacity;
        this.remove( this.line );
        this.geometry = new THREE.Geometry();
        for(let i=0; i< 6000; i++) {
            this.geometry.vertices.push( new THREE.Vector3(Math.sin(i/this.x1) * ((i/this.x2) / this.xDiv), Math.cos(i/this.y1) * ((i/this.y2) / this.yDiv) , Math.sin(this.z1-i/this.z2)* (this.z1 / this.zDiv)) );
        }
        this.line = new THREE.Line (this.geometry, this.material);
        this.add( this.line );
    }

    getVertices() {
        return this.geometry.vertices;
    }
}