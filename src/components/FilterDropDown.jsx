import React from "react";

function FilterDropDown({ value, onChange, options, title }) {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4 ">{title}</h2>
      <select
        className="border border-gray-300 px-2 rounded-xl w-full"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default FilterDropDown;
