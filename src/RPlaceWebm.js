var canvas = temp1;
var stream = canvas.captureStream();
var recordedChunks = [];

var options = { mimeType: "video/webm; codecs=vp9" };
mediaRecorder = new MediaRecorder(stream, options);

mediaRecorder.ondataavailable = handleDataAvailable;
mediaRecorder.start();

function handleDataAvailable(event) {
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    download();
  }
}
function download() {
  var blob = new Blob(recordedChunks, {
    type: "video/webm"
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "test.webm";
  a.click();
  window.URL.revokeObjectURL(url);
}

setTimeout(event => {
  mediaRecorder.stop();
}, 60 * 1000);