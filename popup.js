var observer = new MutationObserver(function (mutations, me) {
  var canvas = document.getElementById('magnifierLens');
  if (canvas) {
    canvas.remove();
//    me.disconnect(); // stop observing
    return;
  }
});

// start observing
observer.observe(document, {
  childList: true,
  subtree: true
});