
var labelCanvas;
var labelCtx;

function _createCanvasText() {

  var newCanvas = document.createElement("canvas");
  newCanvas.setAttribute("width", currentDimensions.width * 0.75);
  newCanvas.setAttribute("height", currentDimensions.height * 0.35);
  newCanvas.setAttribute("class", "tx-canvas");

  document.getElementsByTagName("body")[0].append(newCanvas);

  return newCanvas;
}

function _drawCanvasText(text) {
  var width = labelCtx.canvas.width;
  var height = labelCtx.canvas.height;

  for(var i = 0; i < 5; i++){
    labelCtx.font = "30px Arial";
    labelCtx.strokeStyle = "white";
    labelCtx.shadowBlur = 30;
    labelCtx.shadowColor = "white";
    labelCtx.strokeText(text, width/2 + width * 0.02, height/2);
  }
}

function drawText() {

  $(".hits").text(hitsUser);
  $(".missed").text(miss);
  var ratio = hitsUser/miss
  $(".ratio").text(ratio.toFixed(2));
  $(".menu.end").show();

  if (ratio === Infinity) {
    $(".message").text(`🤩🤩🤩🤩`);
  } else if (ratio > 1) {
    var msg = `👍`
    if (ratio >  1.5) {
      msg = `👍👍`
    }
    if (ratio > 2) {
      msg = `👍👍👍`
    }
    $(".message").text(msg);
  } else {
    $(".message").text(`👎`);
  }
  // if (miss < 11){
  //   _drawCanvasText("Awesome! Just " + miss + " miss.");
  // }
  // else {
  //   _drawCanvasText("You suck!!!! "+ miss + " miss.");
  // }
}
