//ARFFCategoryTable.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import ARFFCategoryOptionMap from '../ChoiceOptions/NOMADARFFCategoryOptionMap'


function ARFFCategoryTable({
    setReturnedSelectedARFFCategory,
}) {

    const [selectedARFFCategory, setSelectedARFFCategory] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedARFFCategory = [...selectedARFFCategory];
        updatedARFFCategory[index] = value;
        setSelectedARFFCategory(updatedARFFCategory);
    };

    setReturnedSelectedARFFCategory(selectedARFFCategory)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Aircraft Rescue and Firefighting
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedARFFCategory}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={ARFFCategoryOptionMap}
                            /><br />
                            <label className="NOMADInformationLabel">
                                <br />
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ARFFCategoryTable;
