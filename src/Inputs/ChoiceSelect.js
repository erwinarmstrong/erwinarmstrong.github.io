//ChoiceSelect.js
import React from 'react';

function ChoiceSelect({ value, onChange, options }) {
    return (
        <select
            className="IRISChoiceSelect"
            value={value} // Bind the value to the prop
            onChange={(e) => {
                console.log(`Selected value: ${e.target.value}`);
                onChange(e.target.value);
            }}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}


export default ChoiceSelect;