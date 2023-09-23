//WorkingMOG.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import OnGroundOptionMap from '../ChoiceOptions/NOMADOnGroundOptionMap'


function WorkingMOGTable({
    setReturnedSelectedWorkingMOG,
}) {

    const [selectedWorkingMOG, setSelectedWorkingMOG] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedWorkingMOG = [...selectedWorkingMOG];
        updatedWorkingMOG[index] = value;
        setSelectedWorkingMOG(updatedWorkingMOG);
    };

    setReturnedSelectedWorkingMOG(selectedWorkingMOG)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Working Max on Ground
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedWorkingMOG}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={OnGroundOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WorkingMOGTable;
