//SpecialEquipmentRequired.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import SpecialEquipmentRequiredOptionMap from '../ChoiceOptions/NineLineSpecialEquipmentRequiredOptionMap'


function SpecialEquipmentRequired({
    setReturnedSelectedSpecialEquipmentRequired,
}) {

    const [selectedSpecialEquipmentRequired, setSelectedSpecialEquipmentRequired] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing SpecialEquipmentRequired ${index} to ${value}`);
        const updatedSpecialEquipmentRequired = [...selectedSpecialEquipmentRequired];
        updatedSpecialEquipmentRequired[index] = value;
        setSelectedSpecialEquipmentRequired(updatedSpecialEquipmentRequired);
    };

    setReturnedSelectedSpecialEquipmentRequired(selectedSpecialEquipmentRequired)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NineLineLable">
                                Special Equipment Required
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedSpecialEquipmentRequired}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={SpecialEquipmentRequiredOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SpecialEquipmentRequired;
