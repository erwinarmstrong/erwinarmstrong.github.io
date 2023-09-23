//LocationsTable.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import DefaultOptionsMap from '../ChoiceOptions/NOMADDefaultOptionMap'


function LocationTable({
    setReturnedSelectedLocations,
}) {

    const [selectedLocations, setSelectedLocations] = useState(['*', '*', '*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedLocations = [...selectedLocations];
        updatedLocations[index] = value;
        setSelectedLocations(updatedLocations);
    };

    useEffect(() => {
        setReturnedSelectedLocations(selectedLocations);
    }, [selectedLocations, setReturnedSelectedLocations]);

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td colSpan="4">
                            <label
                                className="NOMADLable">
                                Location Code
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedLocations[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={DefaultOptionsMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocations[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={DefaultOptionsMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocations[2]}
                                onChange={handleSelectChange(2)} // Pass the index directly
                                options={DefaultOptionsMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocations[3]}
                                onChange={handleSelectChange(3)} // Pass the index directly
                                options={DefaultOptionsMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LocationTable;
