export function test(  ) {
    console.log("testing...");	
}

export function screenXY(obj, camera, w, h) {

  var vector = obj.clone();
  var windowWidth = w;
  
  var widthHalf = (windowWidth/2);
  var heightHalf = (h/2);

  vector.project(camera);

  vector.x = ( vector.x * widthHalf ) + widthHalf;
  vector.y = - ( vector.y * heightHalf ) + heightHalf;
  vector.z = 0;
  return vector;

};