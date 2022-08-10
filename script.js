const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    // select media stream
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // pass to video element
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      // then play the video stream
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

// Add event listiner to btn to go to picture in picture mode
button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
