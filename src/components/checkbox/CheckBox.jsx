import React, { useState, useEffect } from "react";

import "./Checkbox.css";

const Checkbox = ({ checked, onChange }) => {
  const [check, setCheck] = useState(checked);

  const handleCheckboxChange = (e) => {
    setCheck(e.target.checked);
  };

  useEffect(() => {
    if (onChange) {
      onChange(check);
    }
  }, [check]);

  return (
    <div className="round">
      <input
        value={check}
        checked={check}
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <label
        className={`checkbox ${check ? "checkbox--active" : ""}`}
        htmlFor="checkbox"
      ></label>
    </div>
  );
};

export default Checkbox;
