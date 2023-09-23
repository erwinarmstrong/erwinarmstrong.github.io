//DistanceAvailable.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import DistanceAvailableOptionMap from '../ChoiceOptions/DistanceAvailableOptionMap'
import DistanceAvailableOptionMap2 from '../ChoiceOptions/DistanceAvailableOptionMap2'


function DistanceAvailable({
    setReturnedSelectedDistanceAvailable,
}) {

    const [selectedDistanceAvailable, setSelectedDistanceAvailable] = useState(['*', '*', '*', '*']);

    const handleSelectChange = (index) => (value) => {
        const updatedDistanceAvailable = [...selectedDistanceAvailable];
        updatedDistanceAvailable[index] = value;
        setSelectedDistanceAvailable(updatedDistanceAvailable);
    };

    setReturnedSelectedDistanceAvailable(selectedDistanceAvailable)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td colSpan='4'>
                            <label className="NOMADLable">
                                Distance Available:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedDistanceAvailable[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={DistanceAvailableOptionMap}
                            /><br />
                            <label className="NOMADInformationLabel">
                                Thousands:
                            </label>
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedDistanceAvailable[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={DistanceAvailableOptionMap2}
                            /><br />
                            <label className="NOMADInformationLabel">
                                Hundreds:
                            </label>
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedDistanceAvailable[2]}
                                onChange={handleSelectChange(2)} // Pass the index directly
                                options={DistanceAvailableOptionMap2}
                            /><br />
                            <label className="NOMADInformationLabel">
                                Tens:
                            </label>

                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedDistanceAvailable[3]}
                                onChange={handleSelectChange(3)} // Pass the index directly
                                options={DistanceAvailableOptionMap2}
                            /><br />
                            <label className="NOMADInformationLabel">
                                Ones:
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DistanceAvailable;