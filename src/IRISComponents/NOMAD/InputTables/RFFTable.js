//RFFTable.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import RFFOptionMap from '../ChoiceOptions/RFFOptionMap'


function RFFTable({
    setReturnedSelectedRFF,
}) {

    const [selectedRFF, setSelectedRFF] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedRFF = [...selectedRFF];
        updatedRFF[index] = value;
        setSelectedRFF(updatedRFF);
    };

    setReturnedSelectedRFF(selectedRFF)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Rolling Resistance Factor
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedRFF}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={RFFOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RFFTable;
