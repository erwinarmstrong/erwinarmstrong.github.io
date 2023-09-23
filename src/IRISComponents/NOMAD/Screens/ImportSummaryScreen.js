import React from 'react';
import AltimeterOptionMap from '../ChoiceOptions/NOMADAltimeterOptionMap';
import DefaultOptionsMap from '../ChoiceOptions/NOMADDefaultOptionMap'
import RWYInUseOptionMap from '../ChoiceOptions/NOMADRWYInUseOptionMap';


function ImportSummaryScreen({

    // ... (other variables)
}) {

    function getLabelFromValue(value, optionMap) {
        const option = optionMap.find(option => option.value === value);
        return option ? option.label : 'Unknown';
    }





    return (
        <div className='EndScreen'>
            <table className='EndScreenTable'>
                <tbody>
                    <tr>
                        <td>
                            Location:
                        </td>
                        <td>
                            <span>{locationLabel1}</span>
                            <span>{locationLabel2}</span>
                            <span>{locationLabel3}</span>
                            <span>{locationLabel4}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            RWY In Use:
                        </td>
                        <td>
                            <span>{RWYInUseLabel}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ImportSummaryScreen;
