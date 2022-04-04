var canvas = temp1;
var dataURL = canvas.toDataURL("image/png");
var a = document.createElement('a');
a.href = dataURL;
a.download = "place.png";
document.body.appendChild(a);
a.click();