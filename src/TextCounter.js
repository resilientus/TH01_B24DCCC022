import React, { useState } from "react";

function TextCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={200} 
        placeholder="Nhập văn bản..."
        style={{marginLeft:"25px"}}
      />
      <p style={{marginLeft:"25px" }}>Số ký tự: {text.length}</p>
      {text.length > 100 && <p style={{ color: "red", marginLeft:"25px" }}>Bạn đã nhập quá 100 ký tự!</p>}
    </div>
  );
}

export default TextCounter;
