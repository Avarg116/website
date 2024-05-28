import React, { useState, useRef, useEffect } from 'react';
import swordfishImg from './assets/swordfish.png';
import yuiImg from './assets/yui.png';
import katamariImg from './assets/katamari.png';
import frostImg from './assets/frost.png';
import sumiImg from './assets/sumi.png';
import hibikeImg from './assets/hibike.png';
import nierImg from './assets/nier.png';
import crow from './assets/crow.png';


const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [isPainting, setIsPainting] = useState(false);
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [eraserMode, setEraserMode] = useState(false);
  const [brushSize, setBrushSize] = useState(10);
  const [eraserSize, setEraserSize] = useState(20);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
  }, [strokeColor, brushSize]); //update brush size

  const startPaint = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setPrevPos({ x: offsetX, y: offsetY });
    setIsPainting(true);
  };

  const endPaint = () => {
    setIsPainting(false);
  };

  const paint = (event) => {
    if (!isPainting) return;

    const { offsetX, offsetY } = event.nativeEvent;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(prevPos.x, prevPos.y);

    if (eraserMode) {
      ctx.strokeStyle = 'white'; //set eraser
      ctx.lineWidth = eraserSize; // Set eraser size
      ctx.globalCompositeOperation = 'destination-out';
    } else {
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = brushSize; // Set brush size
      ctx.globalCompositeOperation = 'source-over';
    }

    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();

    setPrevPos({ x: offsetX, y: offsetY });
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleColorChange = (e) => {
    setStrokeColor(e.target.value);
    setEraserMode(false);
  };

  const toggleEraser = () => {
    setEraserMode(!eraserMode);
  };

  const handleBrushSizeChange = (e) => {
    setBrushSize(parseInt(e.target.value));
  };

  const handleEraserSizeChange = (e) => {
    setEraserSize(parseInt(e.target.value));
  };


  return (
    <div className="drawing-canvas-container">
      <div className="project-info2">
        <h3>Paint something!</h3>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startPaint}
        onMouseUp={endPaint}
        onMouseMove={paint}
        onMouseOut={endPaint}
        className="drawing-canvas"
        width={800} // canvas width
        height={300}

      />
        <div className="brushsize-box">
       <label htmlFor="brushSize">Color:</label>
       </div>

      <input
      
        type="color"
        value={strokeColor}
        onChange={handleColorChange}
        className="color-picker"
      />



      <div className="brush-size-container">
        <div className="label-container">
          <label htmlFor="brushSize">Brush Size:</label>
        </div>
        <input
          type="range"
          id="brushSize"
          min="1"
          max="50"
          value={brushSize}
          onChange={handleBrushSizeChange}
          className="brush-size-slider"
        />
       
        <span className="brush-size-label">{brushSize}</span>
   
      </div>
  
      <div className="eraser-size-container">
        <div className="label-container">
          <label htmlFor="eraserSize">Eraser Size:</label>
        </div>
        <input
          type="range"
          id="eraserSize"
          min="1"
          max="50"
          value={eraserSize}
          onChange={handleEraserSizeChange}
          className="eraser-size-slider"
        />
        <span className="eraser-size-label">{eraserSize}</span>
      </div>
      <div className="art-btn">
      <button onClick={toggleEraser} className="github-btn">
  {eraserMode ? 'Brush' : 'Eraser'}
</button>
      <button onClick={handleClear} className="clear-btn github-btn">
  Clear
</button>
</div>
    </div>
  );
};









function Interests() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gridItems = [
    { src: swordfishImg, alt: 'Artwork 1' },
    { src: yuiImg, alt: 'Artwork 2' },
    { src: katamariImg, alt: 'Artwork 3' },
    { src: frostImg, alt: 'Artwork 4' },
    { src: sumiImg, alt: 'Artwork 5' },
    { src: hibikeImg, alt: 'Artwork 6' },
    { src: nierImg, alt: 'Artwork 7' },
    { src: crow, alt: 'Artwork 7'}
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  };

  const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gridItems.length);
  };

  const showPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gridItems.length) % gridItems.length);
  };

  return (
    <main>
      <section id="interests">
        <div className="titles">
          <h2>Interests</h2>
        </div>
        <div className="interests">
          <div className="project-info">
            <h3>Subjects</h3>
          </div>
          <div className="space">
            <p>
            <strong>Algorithm Engineering:</strong> I have an interest in designing and implementing efficient algorithms. I enjoy studying topics including parallelism, I/O-efficiency, and other system and architecture features to accelerate algorithms.
            </p>
          </div>
          <div className="space">
            <p>
            <strong>Operating Systems:</strong> I am interested in the design and implementation of operating systems, including UNIX programs, memory allocation, copy-on-write, file systems, and mmap.
            </p>
          </div>
      
          <div className="art">
            <div className="project-info">
              <h3>My Drawings</h3>
            </div>
            <div className="grid-container">
                        {gridItems.map((item, index) => (
                <div key={index} className="grid-item" onClick={() => openModal(index)}>
                  <img src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
            <div className="modal" id="modal">
              <span className="close" onClick={closeModal}>&times;</span>
              <span className="prev" onClick={showPreviousImage}>&#10094;</span>
              <span className="next" onClick={showNextImage}>&#10095;</span>
              <img className="modal-content" id="modalImg" src={gridItems[currentIndex].src} alt={gridItems[currentIndex].alt} />
            </div>
          </div>
          <DrawingCanvas />
        </div>
      </section>
    </main>
  );
}

export default Interests;

