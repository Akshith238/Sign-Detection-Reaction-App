// Import dependencies
"use client"
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { drawRect } from "@/utils/drawRect";

const style={
  webcontainer:`m-6 flex justify-center items-center`,
  webcam:``,
  canvas:``,
}
function ObjectDetection(){
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    const net = await tf.loadGraphModel('https://detmoji.s3.ap-south-1.amazonaws.com/tfjsexport/model.json')
    
    // Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      
      const boxes = await obj[2].array()
      const classes = await obj[7].array()
      const scores = await obj[4].array()

      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.9, videoWidth, videoHeight, ctx)}); 

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div className={style.webcontainer}>
        <canvas
          ref={canvasRef}
          className={style.canvas}
          style={{
            position:"absolute",
            width: 640,
            height: 480,
          }}
        />
        <Webcam
          ref={webcamRef}
          className={style.webcam}
          muted={true} 
          style={{
            width: 640,
            height: 480,
          }}
        /> 
    </div>

  );
}

export default ObjectDetection;