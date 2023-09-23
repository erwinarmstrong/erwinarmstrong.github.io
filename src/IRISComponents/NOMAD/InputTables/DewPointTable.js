//DewPointTable.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import DewPointOptionMap from '../ChoiceOptions/NOMADDewPointOptionMap'


function DewPointTable({
    setReturnedSelectedDewPoint,
}) {

    const [selectedDewPoint, setSelectedDewPoint] = useState(['**']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedDewPoint = [...selectedDewPoint];
        updatedDewPoint[index] = value;
        setSelectedDewPoint(updatedDewPoint);
    };

    setReturnedSelectedDewPoint(selectedDewPoint)

    // Map '*' to '70' for display purposes
    const displayValue = selectedDewPoint[0] === '**' ? '70' : selectedDewPoint[0];

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Dew Point
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={displayValue}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={DewPointOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DewPointTable;
