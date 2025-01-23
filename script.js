// Navigation: Home Page Buttons
const registerBtn = document.getElementById('registerBtn');
const startRecognitionBtn = document.getElementById('startRecognitionBtn');

if (registerBtn) {
  registerBtn.addEventListener('click', () => {
    window.location.href = "register.html";
  });
}

if (startRecognitionBtn) {
  startRecognitionBtn.addEventListener('click', () => {
    window.location.href = "face-recognition.html";
  });
}

// Camera Functionality (Face Recognition Page)
const openCameraBtn = document.getElementById('openCameraBtn');
const video = document.getElementById('video');
const videoContainer = document.getElementById('video-container');

if (openCameraBtn) {
  openCameraBtn.addEventListener('click', () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        videoContainer.style.display = 'block';
      })
      .catch((err) => {
        alert("Unable to access the camera. Please check permissions.");
        console.error(err);
      });
  });
}
