export function saveAsSVG( dataPoints, camera, rendererWidth, rendererHeight, fileName ) {
    
        let header = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 420" width="297" height="420" style="background-color: rgb(255, 255, 255);"><path d="';
    
        let points = [];
        for(let i=0; i< dataPoints.length; i++) {
            points.push( screenXY(dataPoints[i], camera, rendererWidth, rendererHeight) );
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
        let footer = '" style="fill:none;stroke:rgb(0,0,0);stroke-width:1;stroke-linecap:round"/></svg>';

        let output = header;
        for(let i=0; i<formattedPoints.length; i++) {
            output += formattedPoints[i];
        }
        output += footer;
        download(output, fileName, "image/svg");	
}

export function screenXY(obj, camera, w, h) {
  var vector = obj.clone();
  var ww = w;
  
  var widthHalf = (ww/2);
  var heightHalf = (h/2);

  //camera.updateMatrixWorld();
  vector.project(camera);

  vector.x = ( vector.x * widthHalf ) + widthHalf;
  vector.y = - ( vector.y * heightHalf ) + heightHalf;
  vector.z = 0;
  return vector;
};

export function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}