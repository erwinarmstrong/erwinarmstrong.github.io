//CBRPCNTable.js
import React, { useState } from 'react';

import CBRTable from './CBRTable';
import PCNTable from './PCNTable';

function CBRPCNTable({
    setReturnedSelectedCBRPCNTable,
    setReturnedSelectedCBRPCNOptions
}) {

    const [selectedCBRPCNTable, setSelectedCBRPCNTable] = useState(['*']);
    const [selectedCBRPCNOptions, setSelectedCBRPCNOptions] = useState(['*', '*', '*', '*', '*', '*'])

    setReturnedSelectedCBRPCNTable(selectedCBRPCNTable)
    setReturnedSelectedCBRPCNOptions(selectedCBRPCNOptions)

    const [selectedCBRPCNOption, setSelectedCBRPCNOption] = useState(null); // No default selection

    const handleCBRPCNTableOptionChange = (option) => {
        setSelectedCBRPCNTable(option);
        setSelectedCBRPCNTable(option === 'CBR' ? 'C' : 'P');
    };

    const handleCBRPCNOptionClick = (option) => {
        setSelectedCBRPCNOption(option);
        // Call the callback function to change the screen based on the selected option
        handleCBRPCNTableOptionChange(option);
    };

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <div className="NOMADTopbarButtons">
                                <button
                                    className={`NOMADCBRPCNButton ${selectedCBRPCNOption === 'CBR' ? 'selected' : ''}`}
                                    onClick={() => handleCBRPCNOptionClick('CBR')}
                                >
                                    CBR
                                </button>
                                <button
                                    className={`NOMADCBRPCNButton ${selectedCBRPCNOption === 'PCN' ? 'selected' : ''}`}
                                    onClick={() => handleCBRPCNOptionClick('PCN')}
                                >
                                    PCN
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <>
                                {selectedCBRPCNOption === 'CBR' && (
                                    <CBRTable
                                        setSelectedCBRPCNOptions={setSelectedCBRPCNOptions}
                                    />
                                )}
                                {selectedCBRPCNOption === 'PCN' && (
                                    <PCNTable
                                        setSelectedCBRPCNOptions={setSelectedCBRPCNOptions}
                                    />
                                )}
                            </>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default CBRPCNTable;