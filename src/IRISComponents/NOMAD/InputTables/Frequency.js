//FrequencyTable.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import DefaultOptionMap from '../ChoiceOptions/DefaultOptionMap'


function FrequencyTable({
    setReturnedSelectedFrequency,
}) {

    const [selectedFrequency, setSelectedFrequency] = useState(['*', '*', '*', '*', '*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedFrequency = [...selectedFrequency];
        updatedFrequency[index] = value;
        setSelectedFrequency(updatedFrequency);
    };

    setReturnedSelectedFrequency(selectedFrequency)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td colSpan='6'>
                            <label
                                className="NOMADLable">
                                Frequency
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedFrequency[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={DefaultOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedFrequency[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={DefaultOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedFrequency[2]}
                                onChange={handleSelectChange(2)} // Pass the index directly
                                options={DefaultOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedFrequency[3]}
                                onChange={handleSelectChange(3)} // Pass the index directly
                                options={DefaultOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedFrequency[4]}
                                onChange={handleSelectChange(4)} // Pass the index directly
                                options={DefaultOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedFrequency[5]}
                                onChange={handleSelectChange(5)} // Pass the index directly
                                options={DefaultOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FrequencyTable;
