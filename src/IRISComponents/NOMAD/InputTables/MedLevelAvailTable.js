//MedLevelAvail.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import MedLevelAvailOptionMap from '../ChoiceOptions/MedLevelAvailOptionMap'


function MedLevelAvail({
    setReturnedSelectedMedLevelAvail,
}) {

    const [selectedMedLevelAvail, setSelectedMedLevelAvail] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedMedLevelAvail = [...selectedMedLevelAvail];
        updatedMedLevelAvail[index] = value;
        setSelectedMedLevelAvail(updatedMedLevelAvail);
    };

    setReturnedSelectedMedLevelAvail(selectedMedLevelAvail)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Medical Level Available
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedMedLevelAvail}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={MedLevelAvailOptionMap}
                            /><br />
                            <label className="NOMADInformationLabel">
                                <br />
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MedLevelAvail;
