//AltimeterTable.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import AltimeterOptionMap from '../ChoiceOptions/NOMADAltimeterOptionMap'


function AltimeterTable({
    setReturnedSelectedAltimeter,
}) {

    const [selectedAltimeter, setSelectedAltimeter] = useState(['**', '**']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedAltimeter = [...selectedAltimeter];
        updatedAltimeter[index] = value;
        setSelectedAltimeter(updatedAltimeter);
    };

    setReturnedSelectedAltimeter(selectedAltimeter)

    return (
        <div className="NOMADInputTable">
            <table className='NOMADAltimeterTable' style={{ tableLayout: 'auto' }}>
                <tbody>
                    <tr>
                        <td colSpan='3'>
                            <label
                                className="NOMADLable">
                                Altimeter:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedAltimeter[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={AltimeterOptionMap}
                            />
                        </td>
                        <td>
                            <span>.</span>
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedAltimeter[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={AltimeterOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AltimeterTable;
