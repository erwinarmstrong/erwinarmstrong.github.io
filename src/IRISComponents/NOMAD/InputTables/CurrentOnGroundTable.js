//CurrentOnGround.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import OnGroundOptionMap from '../ChoiceOptions/OnGroundOptionMap'


function CurrentOnGround({
    setReturnedSelectedCurrentOnGround,
}) {

    const [selectedCurrentOnGround, setSelectedCurrentOnGround] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedCurrentOnGround = [...selectedCurrentOnGround];
        updatedCurrentOnGround[index] = value;
        setSelectedCurrentOnGround(updatedCurrentOnGround);
    };

    setReturnedSelectedCurrentOnGround(selectedCurrentOnGround)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Current On Ground
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedCurrentOnGround}
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

export default CurrentOnGround;
