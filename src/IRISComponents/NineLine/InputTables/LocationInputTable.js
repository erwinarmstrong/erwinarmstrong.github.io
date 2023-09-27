//Location.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import LocationOptionMap from '../ChoiceOptions/NineLineDefaultOptionMap'
import '../NineLine.css'

function Location({
    setReturnedSelectedLocation,
}) {

    const [selectedLocation, setSelectedLocation] = useState(['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*']);

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
                        <td colSpan={12}>
                            <label
                                className="NineLineLable">
                                Location
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[2]}
                                onChange={handleSelectChange(2)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[3]}
                                onChange={handleSelectChange(3)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[4]}
                                onChange={handleSelectChange(4)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[5]}
                                onChange={handleSelectChange(5)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[6]}
                                onChange={handleSelectChange(6)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[7]}
                                onChange={handleSelectChange(7)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[8]}
                                onChange={handleSelectChange(8)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[9]}
                                onChange={handleSelectChange(9)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[10]}
                                onChange={handleSelectChange(10)} // Pass the index directly
                                options={LocationOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedLocation[11]}
                                onChange={handleSelectChange(11)} // Pass the index directly
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
