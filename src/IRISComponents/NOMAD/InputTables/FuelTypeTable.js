//FuelType.js
import React, { useState } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import FuelTypeOptionMap from '../ChoiceOptions/FuelTypeOptionMap'
import FuelQtyOptionMap from '../ChoiceOptions/FuelQtyOptionMap'


function FuelType({
    setReturnedSelectedFuelType,
    setReturnedSelectedFuelQty,

}) {

    const [selectedFuelType, setSelectedFuelType] = useState(['*', '*']);
    const [selectedFuelQty, setSelectedFuelQty] = useState(['*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedFuelType = [...selectedFuelType];
        updatedFuelType[index] = value;
        setSelectedFuelType(updatedFuelType);
    };

    const handleQtySelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedFuelQty = [...selectedFuelQty];
        updatedFuelQty[index] = value;
        setSelectedFuelQty(updatedFuelQty);
    };
    setReturnedSelectedFuelType(selectedFuelType)
    setReturnedSelectedFuelQty(selectedFuelQty)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Fuel Type 1
                            </label>
                        </td>
                        <td>
                            <label
                                className="NOMADLable">
                                Fuel Type 2
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedFuelType[0]}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={FuelTypeOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedFuelType[1]}
                                onChange={handleSelectChange(1)} // Pass the index directly
                                options={FuelTypeOptionMap}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Fuel 1 Quantity
                            </label>
                        </td>
                        <td>
                            <label
                                className="NOMADLable">
                                Fuel 2 Quantity
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedFuelQty[0]}
                                onChange={handleQtySelectChange(0)} // Pass the index directly
                                options={FuelQtyOptionMap}
                            />
                        </td>
                        <td>
                            <ChoiceSelect
                                value={selectedFuelQty[1]}
                                onChange={handleQtySelectChange(1)} // Pass the index directly
                                options={FuelQtyOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FuelType;
