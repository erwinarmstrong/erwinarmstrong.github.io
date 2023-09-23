//RWYInUse.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import RWYInUseOptionMap from '../ChoiceOptions/NOMADRWYInUseOptionMap'


function RWYInUse({
    setReturnedSelectedRWYInUse,
}) {

    const [selectedRWYInUse, setSelectedRWYInUse] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedRWYInUse = [...selectedRWYInUse];
        updatedRWYInUse[index] = value;
        setSelectedRWYInUse(updatedRWYInUse);
    };

    setReturnedSelectedRWYInUse(selectedRWYInUse)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Runway In Use:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedRWYInUse}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={RWYInUseOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RWYInUse;
