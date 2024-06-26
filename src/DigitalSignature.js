import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import "./DigitalSignature.css";
const DigitalSignature = () => {
  const [penColor, setPenColor] = useState("black");
  const signatureRef = useRef(null);

  const handleClear = () => {
    signatureRef.current.clear();
  };

  const handleSave = () => {
    const trimmedCanvas = signatureRef.current.getTrimmedCanvas();
    const result = trimmedCanvas.toDataURL("image/jpeg");
    setResult(result);
  };

  const [result, setResult] = useState(null);

  return (
    <div>
      <select id="dropdown" value={penColor} onChange={(e) => setPenColor(e.target.value)} >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
      </select>
    
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      > 
      <div style={{margin:"10px"}}>Your's signature colour is : </div>
        <div 
          style={{
            margin:"10px",
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            backgroundColor: penColor,
          }}
        />
      </div>

      <div style={{ width: 500, height: 200, border: `1px solid ${penColor}` }}>
        <SignatureCanvas
          penColor={penColor}
          ref={signatureRef}
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
          backgroundColor="rgba(255,255,255,1)"
        />
      </div>
      <button id="clear" onClick={handleClear}>
        Clear
      </button>
      <button id="save" onClick={handleSave}>
        Save
      </button>
      {result && (
        <div>
          <img src={result} alt="Your Signature" />
          <a href={result} download="signature.jpeg">
          <div>
          <button id="download" onClick={handleClear}>
           Download
          </button>
          </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default DigitalSignature;
