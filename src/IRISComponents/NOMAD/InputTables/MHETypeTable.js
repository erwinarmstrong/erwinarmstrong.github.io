//MHEType.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import MHETypeOptionMap from '../ChoiceOptions/MHETypeOptionMap'
import MHENumberOptionMap from '../ChoiceOptions/MHENumberOptionMap'


function MHEType({
    setReturnedSelectedMHEType,
    setReturnedSelectedMHENumber,
}) {

    const [selectedMHEType, setSelectedMHEType] = useState(['*', '*']);
    const [selectedMHENumber, setSelectedMHENumber] = useState(['*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedMHEType = [...selectedMHEType];
        updatedMHEType[index] = value;
        setSelectedMHEType(updatedMHEType);
    };

    const handleNumberSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedMHENumber = [...selectedMHENumber];
        updatedMHENumber[index] = value;
        setSelectedMHENumber(updatedMHENumber);
    };


    setReturnedSelectedMHEType(selectedMHEType)
    setReturnedSelectedMHENumber(selectedMHENumber)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Material Handeling Equip 1
                            </label>
                        </td>
                        <td>
                            <label
                                className="NOMADLable">
                                Material Handeling Equip 2
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedMHEType[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={MHETypeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedMHEType[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={MHETypeOptionMap}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Equipment 1 Quantity
                            </label>
                        </td>
                        <td>
                            <label
                                className="NOMADLable">
                                Equipment 2 Quantity
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedMHENumber[0]}
                                onChange={handleNumberSelectChange(0)} // Pass the index directly
                                options={MHENumberOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedMHENumber[1]}
                                onChange={handleNumberSelectChange(1)} // Pass the index directly
                                options={MHENumberOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MHEType;
