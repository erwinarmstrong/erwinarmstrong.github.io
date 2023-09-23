//PCNTable.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import PCNNumberOptionMap1 from '../ChoiceOptions/NOMADPCNNumberOptionMap1'
import PCNNumberOptionMap2 from '../ChoiceOptions/NOMADPCNNumberOptionMap2'
import PCNPavementOptionMap from '../ChoiceOptions/NOMADPCNPavementOptionMap'
import PCNSubgradeStengthOptionMap from '../ChoiceOptions/NOMADPCNSubgradeStengthOptionMap'
import PCNTirePressureOptionMap from '../ChoiceOptions/NOMADPCNTirePressureOptionMap'
import PCNMethodOptionMap from '../ChoiceOptions/NOMADPCNMethodOptionMap'



function PCNTable({
    setSelectedCBRPCNOptions,
}) {

    const [selectedPCN, setSelectedPCN] = useState(['*', '*', '*', '*', '*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedPCN = [...selectedPCN];
        updatedPCN[index] = value;
        setSelectedPCN(updatedPCN);
    };

    setSelectedCBRPCNOptions(selectedPCN)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td colSpan='2'>
                            <label
                                className="NOMADLable">
                                Pavement Classification Number
                            </label>
                        </td>
                        <td>
                            <label
                                className="NOMADLable">
                                Pavement Type
                            </label>
                        </td>
                        <td>
                            <label
                                className="NOMADLable">
                                Subgrade Strength
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedPCN[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={PCNNumberOptionMap1}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedPCN[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={PCNNumberOptionMap2}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedPCN[2]}
                                onChange={handleSelectChange(2)} // Pass the index directly
                                options={PCNPavementOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedPCN[3]}
                                onChange={handleSelectChange(3)} // Pass the index directly
                                options={PCNSubgradeStengthOptionMap}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <label
                                className="NOMADLable">
                                Tire Pressure
                            </label>
                        </td>
                        <td colSpan='2'>
                            <label
                                className="NOMADLable">
                                Method of PCN Determination
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <ChoiceSelect
                                value={selectedPCN[4]}
                                onChange={handleSelectChange(4)} // Pass the index directly
                                options={PCNTirePressureOptionMap}
                            />
                        </td>
                        <td colSpan='2'>
                            <ChoiceSelect
                                value={selectedPCN[5]}
                                onChange={handleSelectChange(5)} // Pass the index directly
                                options={PCNMethodOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PCNTable;
