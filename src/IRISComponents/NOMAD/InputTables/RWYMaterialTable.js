//RWYMaterialsTable.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import RWYMaterialOptionsMap from '../ChoiceOptions/NOMADRWYMaterialOptionsMap'


function RWYMaterialTable({
    setReturnedSelectedRWYMaterials,
}) {

    const [selectedRWYMaterials, setSelectedRWYMaterials] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing RWYMaterial ${index} to ${value}`);
        const updatedRWYMaterials = [...selectedRWYMaterials];
        updatedRWYMaterials[index] = value;
        setSelectedRWYMaterials(updatedRWYMaterials);
    };

    setReturnedSelectedRWYMaterials(selectedRWYMaterials)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Runway Material
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedRWYMaterials[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={RWYMaterialOptionsMap}
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

export default RWYMaterialTable;
