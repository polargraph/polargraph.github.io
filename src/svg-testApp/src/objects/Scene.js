import * as THREE from 'three';
import CustomLines from './CustomLines/CustomLines.js';

export default class CustomScene extends THREE.Group {
    constructor() {
        super();
        
        this.customLines = new CustomLines();
        this.custommLines = new CustomLines();
        this.add(this.customLines);
        this.add(this.custommLines);
    }

    update(timeStamp, x, y, cam) {
        this.customLines.update(timeStamp);
        this.custommLines.update(timeStamp);
    }
}