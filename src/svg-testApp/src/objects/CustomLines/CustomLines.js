export default class CustomLines extends THREE.Group {
    constructor() {
        super();
        this.name = 'customline';
        
        let vertices = [];
        let divisions = 50;
        for ( let i = 0; i <= divisions; i ++ ) {
            let v = ( i / divisions ) * ( Math.PI * 2 );
            let x = Math.sin( v );
            let z = Math.cos( v );
            vertices.push( x, 0, z );
        }
        let geometry = new THREE.BufferGeometry();
        geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        for ( let i = 1; i <= 3; i ++ ) {
            let material = new THREE.LineBasicMaterial( {
                color: Math.random() * 0xffffff,
                linewidth: 10
            } );
            let line = new THREE.Line( geometry, material );
            line.scale.setScalar( i / 3 );
            this.add( line );
        }
        let material = new THREE.LineDashedMaterial( {
            color: 'blue',
            linewidth: 1,
            dashSize: 10,
            gapSize: 10
        } );
        let line = new THREE.Line( geometry, material );
        line.scale.setScalar( 2 );
        this.add( line );
    }

    update(timeStamp) {
        this.rotation.y = timeStamp / 1000;
        this.rotation.x = timeStamp / 1200;
    }
}