// callback executed when canvas was found
function handleCanvas(canvas) { 
  var myobj = document.getElementById("magnifierLens");
  myobj.remove();
}

// set up the mutation observer
var observer = new MutationObserver(function (mutations, me) {
  // `mutations` is an array of mutations that occurred
  // `me` is the MutationObserver instance
  var canvas = document.getElementById('magnifierLens');
  if (canvas) {
    handleCanvas(canvas);
    me.disconnect(); // stop observing
    return;
  }
});

// start observing
observer.observe(document, {
  childList: true,
  subtree: true
});