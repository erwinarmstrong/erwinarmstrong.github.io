//GustVelocity.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import GustVelocityOptionMap from '../ChoiceOptions/GustVelocityOptionMap'


function GustVelocity({
    setReturnedSelectedGustVelocity,
}) {

    const [selectedGustVelocity, setSelectedGustVelocity] = useState(['**']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedGustVelocity = [...selectedGustVelocity];
        updatedGustVelocity[index] = value;
        setSelectedGustVelocity(updatedGustVelocity);
    };

    setReturnedSelectedGustVelocity(selectedGustVelocity)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Gust Velocity
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedGustVelocity}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={GustVelocityOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GustVelocity;
