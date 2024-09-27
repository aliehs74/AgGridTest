import React, { useEffect, useRef, useState } from "react";

function GridOverlay(props) {
  const myRef = useRef(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        myRef.current.focus();
      } catch (error) {}

      setShow(false);
    }, 10);
  }, []);

  return (
    <div className="ag-overlay-loading-center">
      لطفا منتظر بمانید ...
      <input
        style={{
          width: 0,
          height: 0,
          visibility: show ? "" : "hidden",
          position: "absolute",
        }}
        ref={myRef}
      />
    </div>
  );
}

export default GridOverlay;
