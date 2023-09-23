//WindVelocity.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import WindVelocityOptionMap from '../ChoiceOptions/WindVelocityOptionMap'


function WindVelocity({
    setReturnedSelectedWindVelocity,
}) {

    const [selectedWindVelocity, setSelectedWindVelocity] = useState(['**']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedWindVelocity = [...selectedWindVelocity];
        updatedWindVelocity[index] = value;
        setSelectedWindVelocity(updatedWindVelocity);
    };

    setReturnedSelectedWindVelocity(selectedWindVelocity)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Wind Velocity:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedWindVelocity[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={WindVelocityOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WindVelocity;
