import * as THREE from 'three';

export default class CustomLines extends THREE.Group {
    constructor() {
        super();
        this.name = 'customline';
        
        this.material = new THREE.LineBasicMaterial ( {color:0x000000, depthWrite:false, linewidth : 1 } ); 
        
        let xDiv = 11;
        let yDiv = 11;
        let zDiv = 1;

        let x1 = 20.0; // 20
        let x2 = 2.0;
        let y1 = 20.0; // 20
        let y2 = 2.0;
        let z1 = 300.0;
        let z2 = 100; // 100

        let geometry = new THREE.Geometry();
            for(let i=0; i< 4000; i++) {
                geometry.vertices.push( new THREE.Vector3(Math.sin(i/x1) * ((i/x2) / xDiv), Math.cos(i/y1) * ((i/y2) / yDiv) , Math.sin(z1-i/z2)* (z1 / zDiv)) );
            }
        
        this.rotation.x = Math.random()*10;

        let line = new THREE.Line (geometry, this.material);
        this.add( line );
    }

    update(timeStamp) {
        //this.rotation.y = timeStamp / 10000;
        //this.rotation.x = timeStamp / 12000;
    }
}