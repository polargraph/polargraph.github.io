import CustomLines from './CustomLines/CustomLines.js';

export default class CustomScene extends THREE.Group {
    constructor() {
        super();
        
        this.customLines = new CustomLines();
        this.add(this.customLines);
    }

    update(timeStamp, x, y, cam) {
        this.customLines.update(timeStamp);
    }
}