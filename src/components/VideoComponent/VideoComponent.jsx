function VideoComponent() {
  return (
    <div>
      <h2>Video</h2>
      <video width="320" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoComponent;
