//CBRTable.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import CBROptionMap from '../ChoiceOptions/CBROptionMap'
import CBRLayerOptionMap from '../ChoiceOptions/CBRLayerOptionMap'



function CBRTable({
    setSelectedCBRPCNOptions,
}) {

    const [selectedCBR, setSelectedCBR] = useState(['*', '*', '*', '*', '*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedCBR = [...selectedCBR];
        updatedCBR[index] = value;
        setSelectedCBR(updatedCBR);
    };

    setSelectedCBRPCNOptions(selectedCBR)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                California Bearing Ratio 1
                            </label>
                        </td>
                        <td>
                            <label
                                className="NOMADLable">
                                Layer 1
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedCBR[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={CBROptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedCBR[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={CBRLayerOptionMap}
                            />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                California Bearing Ratio 2
                            </label>
                        </td>
                        <td>
                            <label
                                className="NOMADLable">
                                Layer 2
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedCBR[2]}
                                onChange={handleSelectChange(2)} // Pass the index directly
                                options={CBROptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedCBR[3]}
                                onChange={handleSelectChange(3)} // Pass the index directly
                                options={CBRLayerOptionMap}
                            />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                California Bearing Ratio 3
                            </label>
                        </td>
                        <td>
                            <label
                                className="NOMADLable">
                                Layer 3
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedCBR[4]}
                                onChange={handleSelectChange(4)} // Pass the index directly
                                options={CBROptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedCBR[5]}
                                onChange={handleSelectChange(5)} // Pass the index directly
                                options={CBRLayerOptionMap}
                            />
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CBRTable;
