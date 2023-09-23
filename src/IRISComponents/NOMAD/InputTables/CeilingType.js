//CeilingType.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import CeilingTypeOptionMap from '../ChoiceOptions/CeilingTypeOptionMap'


function CeilingType({
    setReturnedSelectedCeilingType,
}) {

    const [selectedCeilingType, setSelectedCeilingType] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedCeilingType = [...selectedCeilingType];
        updatedCeilingType[index] = value;
        setSelectedCeilingType(updatedCeilingType);
    };

    setReturnedSelectedCeilingType(selectedCeilingType)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Ceiling Type:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedCeilingType}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={CeilingTypeOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CeilingType;
