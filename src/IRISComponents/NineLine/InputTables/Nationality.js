//Nationality.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import NationalityOptionMap from '../ChoiceOptions/NineLineNationalityOptionMap'
import Nationality2OptionMap from '../ChoiceOptions/NineLineNationality2OptionMap'

function Nationality({
    setReturnedSelectedNationality,
}) {

    const [selectedNationality, setSelectedNationality] = useState(['*', '*', '*', '*', '*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing Nationality ${index} to ${value}`);
        const updatedNationality = [...selectedNationality];
        updatedNationality[index] = value;
        setSelectedNationality(updatedNationality);
    };

    setReturnedSelectedNationality(selectedNationality)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NineLineLable">
                                US or Coalition Military
                            </label>
                        </td>
                        <td>
                            <label
                                className="NineLineLable">
                                US or Coalition Civilian
                            </label>
                        </td>
                        <td>
                            <label
                                className="NineLineLable">
                                Non-Coalition Military
                            </label>
                        </td>
                        <td>
                            <label
                                className="NineLineLable">
                                Non-Coalition Civilian
                            </label>
                        </td>
                        <td>
                            <label
                                className="NineLineLable">
                                Enemy Prisoner of War (EPW)
                            </label>
                        </td>
                        <td>
                            <label
                                className="NineLineLable">
                                High-Value Target (HVT)
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedNationality[0]}
                                onChange={handleSelectChange(0)}
                                options={Nationality2OptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedNationality[1]}
                                onChange={handleSelectChange(1)}
                                options={Nationality2OptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedNationality[2]}
                                onChange={handleSelectChange(2)}
                                options={NationalityOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedNationality[3]}
                                onChange={handleSelectChange(3)}
                                options={NationalityOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedNationality[4]}
                                onChange={handleSelectChange(4)}
                                options={NationalityOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedNationality[5]}
                                onChange={handleSelectChange(5)}
                                options={NationalityOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Nationality;
