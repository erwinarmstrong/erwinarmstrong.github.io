//WindDirectionTable.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import WindDirectionOptionMap from '../ChoiceOptions/WindDirectionOptionMap'



function WindDirectionTable({
    setReturnedSelectedWindDirection,
}) {

    const [selectedWindDirection, setSelectedWindDirection] = useState(['***']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedWindDirection = [...selectedWindDirection];
        updatedWindDirection[index] = value;
        setSelectedWindDirection(updatedWindDirection);
    };

    setReturnedSelectedWindDirection(selectedWindDirection)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Wind Direction
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedWindDirection}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={WindDirectionOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WindDirectionTable;
