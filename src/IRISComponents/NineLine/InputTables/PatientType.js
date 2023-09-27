//PatientType.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import QuantityOptionMap from '../ChoiceOptions/NineLinePrecedenceOptionMap'


function PatientType({
    setReturnedSelectedPatientType,
}) {

    const [selectedPatientType, setSelectedPatientType] = useState(['*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing PatientType ${index} to ${value}`);
        const updatedPatientType = [...selectedPatientType];
        updatedPatientType[index] = value;
        setSelectedPatientType(updatedPatientType);
    };

    setReturnedSelectedPatientType(selectedPatientType)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <label
                                className="NineLineLable">
                                Patient Type
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="NineLineLabel">Ambulatory</label>
                        </td>
                        <td>
                            <label className="NineLineLabel">Litter</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedPatientType[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={QuantityOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedPatientType[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={QuantityOptionMap}
                            />
                        </td>
                    </tr>

                </tbody>
            </table >
        </div >
    );
}

export default PatientType;
