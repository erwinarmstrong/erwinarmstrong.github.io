//CeilingAltitude.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import CeilingAltitudeOptionMap from '../ChoiceOptions/CeilingAltitudeOptionMap'


function CeilingAltitudeTable({
    setReturnedSelectedCeilingAltitude,
}) {

    const [selectedCeilingAltitude, setSelectedCeilingAltitude] = useState(['**']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedCeilingAltitude = [...selectedCeilingAltitude];
        updatedCeilingAltitude[index] = value;
        setSelectedCeilingAltitude(updatedCeilingAltitude);
    };

    setReturnedSelectedCeilingAltitude(selectedCeilingAltitude)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Ceiling Altitude:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedCeilingAltitude[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={CeilingAltitudeOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CeilingAltitudeTable;
