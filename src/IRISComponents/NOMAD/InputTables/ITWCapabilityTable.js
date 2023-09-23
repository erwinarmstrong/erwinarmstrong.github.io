//ITWCapability.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import ITWCapabilityOptionMap from '../ChoiceOptions/NOMADITWCapabilityOptionMap'


function ITWCapability({
    setReturnedSelectedITWCapability,
}) {

    const [selectedITWCapability, setSelectedITWCapability] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedITWCapability = [...selectedITWCapability];
        updatedITWCapability[index] = value;
        setSelectedITWCapability(updatedITWCapability);
    };

    setReturnedSelectedITWCapability(selectedITWCapability)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Intigraded Threat Warning:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedITWCapability}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={ITWCapabilityOptionMap}
                            /><br />
                            <label className="NOMADInformationLabel">
                                Minutes
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ITWCapability;
