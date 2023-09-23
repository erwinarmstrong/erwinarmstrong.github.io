//RWYWidth.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import RWYWidthOptionMap from '../ChoiceOptions/RWYWidthOptionMap'


function RWYWidth({
    setReturnedSelectedRWYWidth,
}) {

    const [selectedRWYWidth, setSelectedRWYWidth] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedRWYWidth = [...selectedRWYWidth];
        updatedRWYWidth[index] = value;
        setSelectedRWYWidth(updatedRWYWidth);
    };

    setReturnedSelectedRWYWidth(selectedRWYWidth)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Runway Width:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedRWYWidth}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={RWYWidthOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RWYWidth;
