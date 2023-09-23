//RWYMarking.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import RWYMarkingOptionMap from '../ChoiceOptions/NOMADRWYMarkingOptionMap'


function RWYMarking({
    setReturnedSelectedRWYMarking,
}) {

    const [selectedRWYMarking, setSelectedRWYMarking] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedRWYMarking = [...selectedRWYMarking];
        updatedRWYMarking[index] = value;
        setSelectedRWYMarking(updatedRWYMarking);
    };

    setReturnedSelectedRWYMarking(selectedRWYMarking)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Runway Markings:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedRWYMarking}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={RWYMarkingOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RWYMarking;
