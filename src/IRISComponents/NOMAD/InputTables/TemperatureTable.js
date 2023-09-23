//TemperatureTable.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import TemperatureOptionMap from '../ChoiceOptions/NOMADTemperatureOptionMap'


function TemperatureTable({
    setReturnedSelectedTemperature,
}) {

    const [selectedTemperature, setSelectedTemperature] = useState(['**']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedTemperature = [...selectedTemperature];
        updatedTemperature[index] = value;
        setSelectedTemperature(updatedTemperature);
    };

    setReturnedSelectedTemperature(selectedTemperature)

    // Map '*' to '70' for display purposes
    const displayValue = selectedTemperature[0] === '**' ? '70' : selectedTemperature[0];


    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Temperature
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={displayValue}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={TemperatureOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TemperatureTable;
