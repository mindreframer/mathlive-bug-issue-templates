import * as mathlive from "mathlive";
import "mathlive/dist/mathlive-fonts.css";
import React, { useCallback, useState, useRef } from "react";

const configureMathElement = (mfe) => {
  mfe.setOptions({
    smartFence: true,
    virtualKeyboardMode: "off", // "manual"
    virtualKeyboards: "numeric symbols",
  });

  mfe.addEventListener("focus", (ev) => {
    // console.log("Got focus", ev);
  });

  mfe.addEventListener("focus-out", (ev) => {
    // console.log("Lost focus", ev.detail.direction);
  });

  mfe.addEventListener("mount", (ev) => {
    // console.log("Mounted", ev);
  });

  // https://cortexjs.io/docs/mathlive/?q=selection-change
  mfe.addEventListener("selection-change", (ev) => {
    const sel = mfe.selection;
    console.log(sel, "SELECTION");
    if (sel) {
      const s1 = sel.ranges[0];
      console.log(`${s1[0]} -> ${s1[1]}`);
      console.log("RANGE", s1);
      console.log(mfe.getValue(s1));
    }
  });
};

export const MathElement = ({ value }) => {
  const [curval, setCurVal] = useState(value);
  const [configured, setConfigured] = useState(false);
  const [actionParam, setActionParam] = useState("");
  const [mfe, setMfe] = useState(new mathlive.MathfieldElement());
  const selInput = useRef(null);

  const elRef = useCallback((node) => {
    if (node !== null) {
      if (!configured) {
        configureMathElement(mfe);
        setConfigured(true);
      }
      mfe.setValue(curval);
      node.appendChild(mfe);
    }
  }, []);

  /**
   * here you can read the value from the action input and process it in creative ways
   * e.g.: modify / reconfigure the `mfe` instance
   */
  const doAction = () => {
    console.log("ACTION INPUT", actionParam);
    mfe.focus();
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div className="mathfield-element" ref={elRef}></div>
        <button onClick={doAction}>ACTION</button>
        <input
          type="text"
          className="action"
          ref={selInput}
          width="100px"
          onChange={(e) => setActionParam(e.target.value)}
        />
      </div>
    </div>
  );
};
