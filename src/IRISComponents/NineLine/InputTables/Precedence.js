//Precedence.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import PrecedenceOptionMap from '../ChoiceOptions/NineLinePrecedenceOptionMap'


function Precedence({
    setReturnedSelectedPrecedence,
}) {

    const [selectedPrecedence, setSelectedPrecedence] = useState(['*', '*', '*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing Precedence ${index} to ${value}`);
        const updatedPrecedence = [...selectedPrecedence];
        updatedPrecedence[index] = value;
        setSelectedPrecedence(updatedPrecedence);
    };

    setReturnedSelectedPrecedence(selectedPrecedence)

    return (
        <div className="InputDIV">
            <table className="InputTable" border={1}>
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NineLineLable">
                                Precedence
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table className='InputTable'>
                                <tr>
                                    <td><label>Urgent</label></td>
                                    <td><label>Urgent Surgical</label></td>
                                    <td><label>Priority</label></td>
                                    <td><label>Routine</label></td>
                                </tr>
                                <tr>
                                    <td>
                                        <ChoiceSelect
                                            value={selectedPrecedence[0]}
                                            onChange={handleSelectChange(0)} // Pass the index directly
                                            options={PrecedenceOptionMap}
                                        />
                                    </td>
                                    <td>
                                        <ChoiceSelect
                                            value={selectedPrecedence[1]}
                                            onChange={handleSelectChange(1)} // Pass the index directly
                                            options={PrecedenceOptionMap}
                                        />
                                    </td>
                                    <td>
                                        <ChoiceSelect
                                            value={selectedPrecedence[2]}
                                            onChange={handleSelectChange(2)} // Pass the index directly
                                            options={PrecedenceOptionMap}
                                        />
                                    </td>
                                    <td>
                                        <ChoiceSelect
                                            value={selectedPrecedence[3]}
                                            onChange={handleSelectChange(3)} // Pass the index directly
                                            options={PrecedenceOptionMap}
                                        />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Precedence;
