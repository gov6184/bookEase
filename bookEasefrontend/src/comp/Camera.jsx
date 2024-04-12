import React, { useState, useRef, useEffect } from 'react';
import axios from "axios"
import style from  "../css/Camera.module.css"
export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImages, setCapturedImages] = useState([]); // Array to store captured images

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const cleanup = () => {
      if (isCameraActive) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };

    return cleanup;
  }, [isCameraActive]);

  const handleCapture = async () => {
    if (isCameraActive) {
  
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0);
      video.pause();
      setIsCameraActive(false);

      const capturedImage = canvas.toDataURL('image/png');
      

      console.log('Captured image:', capturedImage);
    } else {
      
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
          setIsCameraActive(true);
        })
        .catch(error => {
          console.error('Error accessing camera:', error);
        });
    }
  };

  return (
    <div className={style.camera_container}>
      <div className={style.camera_wrapper}>
        <video ref={videoRef} autoPlay muted width="100%" height="auto" style={{ display: isCameraActive ? 'block' : "block" }} />
        <canvas ref={canvasRef} style={{ display: !isCameraActive ? 'none' : videoRef }} />
      </div>
      <button onClick={handleCapture} className={style.capture_button}>
        {isCameraActive ? 'Capture Image' : 'Start Camera'}
      </button>
    </div>
  );
}
