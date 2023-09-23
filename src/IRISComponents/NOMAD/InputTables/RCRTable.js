//RCRTable.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import RCROptionMap from '../ChoiceOptions/NOMADRCROptionMap'


function RCRTable({
    setReturnedSelectedRCR,
}) {

    const [selectedRCR, setSelectedRCR] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedRCR = [...selectedRCR];
        updatedRCR[index] = value;
        setSelectedRCR(updatedRCR);
    };

    setReturnedSelectedRCR(selectedRCR)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Runway Condition Report
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedRCR}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={RCROptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RCRTable;
