//VisibilityDistance.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import VisibilityDistanceOptionMap from '../ChoiceOptions/VisibilityDistanceOptionMap'


function VisibilityDistance({
    setReturnedSelectedVisibilityDistance,
}) {

    const [selectedVisibilityDistance, setSelectedVisibilityDistance] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedVisibilityDistance = [...selectedVisibilityDistance];
        updatedVisibilityDistance[index] = value;
        setSelectedVisibilityDistance(updatedVisibilityDistance);
    };

    setReturnedSelectedVisibilityDistance(selectedVisibilityDistance)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Visibility Distance:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedVisibilityDistance}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={VisibilityDistanceOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default VisibilityDistance;
