//ParkingMOG.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import OnGroundOptionMap from '../ChoiceOptions/NOMADOnGroundOptionMap'


function ParkingMOG({
    setReturnedSelectedParkingMOG,
}) {

    const [selectedParkingMOG, setSelectedParkingMOG] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedParkingMOG = [...selectedParkingMOG];
        updatedParkingMOG[index] = value;
        setSelectedParkingMOG(updatedParkingMOG);
    };

    setReturnedSelectedParkingMOG(selectedParkingMOG)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Parking Max on Ground
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedParkingMOG}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={OnGroundOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ParkingMOG;
