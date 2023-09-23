//SuitabilityCode.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import SuitabilityCodeOptionMap from '../ChoiceOptions/SuitabilityCodeOptionMap'


function SuitabilityCode({
    setReturnedSelectedSuitabilityCode,
}) {

    const [selectedSuitabilityCode, setSelectedSuitabilityCode] = useState(['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedSuitabilityCode = [...selectedSuitabilityCode];
        updatedSuitabilityCode[index] = value;
        setSelectedSuitabilityCode(updatedSuitabilityCode);
    };

    setReturnedSelectedSuitabilityCode(selectedSuitabilityCode)

    // Map '*' to 'N/A' for display purposes
    const displayValue = selectedSuitabilityCode[0] === '*' ? 'N/A' : selectedSuitabilityCode[0];



    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td colSpan='5'>
                            <label
                                className="NOMADLable">
                                Suitability Codes
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[2]}
                                onChange={handleSelectChange(2)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[3]}
                                onChange={handleSelectChange(3)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[4]}
                                onChange={handleSelectChange(4)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[5]}
                                onChange={handleSelectChange(5)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[6]}
                                onChange={handleSelectChange(6)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[7]}
                                onChange={handleSelectChange(7)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[8]}
                                onChange={handleSelectChange(8)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[9]}
                                onChange={handleSelectChange(9)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[10]}
                                onChange={handleSelectChange(10)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[11]}
                                onChange={handleSelectChange(11)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[12]}
                                onChange={handleSelectChange(12)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[13]}
                                onChange={handleSelectChange(13)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[14]}
                                onChange={handleSelectChange(14)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[15]}
                                onChange={handleSelectChange(15)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[16]}
                                onChange={handleSelectChange(16)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[17]}
                                onChange={handleSelectChange(17)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[18]}
                                onChange={handleSelectChange(18)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedSuitabilityCode[19]}
                                onChange={handleSelectChange(19)} // Pass the index directly
                                options={SuitabilityCodeOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SuitabilityCode;
