import React, { useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("http://localhost:3000/videos/index.m3u8");
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = "http://localhost:3000/videos/index.m3u8";
      videoRef.current.addEventListener("loadedmetadata", () => {
        videoRef.current.play();
      });
    }
  };

  return (
    <>
      <h1>Enter</h1>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={handlePlay}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Play the video
        </button>
        <div style={{ marginTop: "20px" }}>
          <video
            ref={videoRef}
            controls
            style={{ width: "100%", height: "auto" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
