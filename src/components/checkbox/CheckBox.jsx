import React, { useState, useEffect } from "react";

import "./Checkbox.css";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.checked);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    if (props.onChange) {
      props.onChange(checked);
    }
  }, [checked]);

  return (
    <div className="round">
      <input
        value={checked}
        checked={checked}
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <label
        className={`checkbox ${!checked ? "checkbox--active" : ""}`}
        htmlFor="checkbox"
      ></label>
    </div>
  );
};

export default Checkbox;
