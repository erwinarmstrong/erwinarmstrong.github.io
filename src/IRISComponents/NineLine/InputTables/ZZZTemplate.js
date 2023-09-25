//Location.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import LocationOptionMap from '../ChoiceOptions/NineLineDefaultOptionMap'


function Location({
    setReturnedSelectedLocation,
}) {

    const [selectedLocation, setSelectedLocation] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedLocation = [...selectedLocation];
        updatedLocation[index] = value;
        setSelectedLocation(updatedLocation);
    };

    setReturnedSelectedLocation(selectedLocation)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NineLineLable">
                                Location
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Location;
