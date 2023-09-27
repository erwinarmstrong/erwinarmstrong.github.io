//NBCContamination.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import NBCContaminationOptionMap from '../ChoiceOptions/NineLineNBCContaminationOptionMap'


function NBCContamination({
    setReturnedSelectedNBCContamination,
}) {

    const [selectedNBCContamination, setSelectedNBCContamination] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing NBCContamination ${index} to ${value}`);
        const updatedNBCContamination = [...selectedNBCContamination];
        updatedNBCContamination[index] = value;
        setSelectedNBCContamination(updatedNBCContamination);
    };

    setReturnedSelectedNBCContamination(selectedNBCContamination)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NineLineLable">
                                NBC Contamination
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedNBCContamination}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={NBCContaminationOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NBCContamination;
