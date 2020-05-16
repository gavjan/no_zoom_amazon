function handleCanvas(canvas) { 
  var myobj = document.getElementById("magnifierLens");
  if(myobj){
    myobj.remove();
  }
  
}

window.setInterval(handleCanvas, 1000);