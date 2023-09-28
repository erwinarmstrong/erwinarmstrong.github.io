import React, { useState } from 'react';

function Topbar({
    returnedSelectedLocations,
    returnedSelectedRWYInUse,
    returnedSelectedDistanceAvailable,
    returnedSelectedRWYWidth,
    returnedSelectedRWYMaterials,
    returnedSelectedCBRPCNTable,
    returnedSelectedCBRPCNOptions,
    returnedSelectedRCR,
    returnedSelectedRFF,
    returnedSelectedWindDirection,
    returnedSelectedWindVelocity,
    returnedSelectedGustVelocity,
    returnedSelectedVisibilityDistance,
    returnedSelectedCeilingType,
    returnedSelectedCeilingAltitude,
    returnedSelectedTemperature,
    returnedSelectedDewPoint,
    returnedSelectedAltimeter,
    returnedSelectedRWYMarking,
    returnedSelectedARFFCategory,
    returnedSelectedCurrentOnGround,
    returnedSelectedParkingMOG,
    returnedSelectedWorkingMOG,
    returnedSelectedMHEType,
    returnedSelectedMHENumber,
    returnedSelectedFuelType,
    returnedSelectedFuelQty,
    returnedSelectedMedLevelAvail,
    returnedSelectedITWCapability,
    returnedSelectedFrequency,
    returnedSelectedSuitabilityCode,

}) {

    const [copyStatus, setCopyStatus] = useState('Copy NOMAD String to Clipboard');

    const downloadTopbarContent = () => {
        const content = [
            'A',
            'A',
            returnedSelectedLocations,
            returnedSelectedRWYInUse,
            returnedSelectedDistanceAvailable,
            returnedSelectedRWYWidth,
            returnedSelectedRWYMaterials,
            returnedSelectedCBRPCNTable,
            returnedSelectedCBRPCNOptions,
            returnedSelectedRCR,
            returnedSelectedRFF,
            returnedSelectedWindDirection,
            returnedSelectedWindVelocity,
            returnedSelectedGustVelocity,
            returnedSelectedVisibilityDistance,
            returnedSelectedCeilingType,
            returnedSelectedCeilingAltitude,
            returnedSelectedTemperature,
            returnedSelectedDewPoint,
            returnedSelectedAltimeter,
            returnedSelectedRWYMarking,
            returnedSelectedARFFCategory,
            returnedSelectedCurrentOnGround,
            returnedSelectedParkingMOG,
            returnedSelectedWorkingMOG,
            returnedSelectedMHEType[0],
            returnedSelectedMHENumber[0],
            returnedSelectedMHEType[1],
            returnedSelectedMHENumber[1],
            returnedSelectedFuelType[0],
            returnedSelectedFuelQty[0],
            returnedSelectedFuelType[1],
            returnedSelectedFuelQty[1],
            returnedSelectedMedLevelAvail,
            returnedSelectedITWCapability,
            returnedSelectedFrequency,
            returnedSelectedSuitabilityCode,
        ].flat().join('');

        const element = document.createElement('a');
        const file = new Blob([content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'topbar-content.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const copyToClipboard = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            const content = [
                'A',
                'A',
                returnedSelectedLocations,
                returnedSelectedRWYInUse,
                returnedSelectedDistanceAvailable,
                returnedSelectedRWYWidth,
                returnedSelectedRWYMaterials,
                returnedSelectedCBRPCNTable,
                returnedSelectedCBRPCNOptions,
                returnedSelectedRCR,
                returnedSelectedRFF,
                returnedSelectedWindDirection,
                returnedSelectedWindVelocity,
                returnedSelectedGustVelocity,
                returnedSelectedVisibilityDistance,
                returnedSelectedCeilingType,
                returnedSelectedCeilingAltitude,
                returnedSelectedTemperature,
                returnedSelectedDewPoint,
                returnedSelectedAltimeter,
                returnedSelectedRWYMarking,
                returnedSelectedARFFCategory,
                returnedSelectedCurrentOnGround,
                returnedSelectedParkingMOG,
                returnedSelectedWorkingMOG,
                returnedSelectedMHEType[0],
                returnedSelectedMHENumber[0],
                returnedSelectedMHEType[1],
                returnedSelectedMHENumber[1],
                returnedSelectedFuelType[0],
                returnedSelectedFuelQty[0],
                returnedSelectedFuelType[1],
                returnedSelectedFuelQty[1],
                returnedSelectedMedLevelAvail,
                returnedSelectedITWCapability,
                returnedSelectedFrequency,
                returnedSelectedSuitabilityCode,
            ].flat().join('');

            navigator.clipboard.writeText(content).then(() => {
                setCopyStatus('Copied!');
                setTimeout(() => setCopyStatus('Copy NOMAD String to Clipboard'), 2000);
            })
                .catch((error) => {
                    console.error('Error copying to clipboard:', error);
                    setCopyStatus('Error Copying');
                });
        } else {
            setCopyStatus('Copy not supported');
        }
    };


    return (
        <div className='NOMADTopbarButtons'>
            <button className="NOMADButton" onClick={downloadTopbarContent}>Export Topbar Content</button>
            <table>
                <tbody>
                    <tr>
                        <td colSpan='2'>
                            <span>A</span>
                            <span>A</span>
                            <span>{returnedSelectedLocations}</span>
                            <span>{returnedSelectedRWYInUse}</span>
                            <span>{returnedSelectedDistanceAvailable}</span>
                            <span>{returnedSelectedRWYWidth}</span>
                            <span>{returnedSelectedRWYMaterials}</span>
                            <span>{returnedSelectedCBRPCNTable}</span>
                            <span>{returnedSelectedCBRPCNOptions}</span>
                            <span>{returnedSelectedRCR}</span>
                            <span>{returnedSelectedRFF}</span>
                            <span>{returnedSelectedWindDirection}</span>
                            <span>{returnedSelectedWindVelocity}</span>
                            <span>{returnedSelectedGustVelocity}</span>
                            <span>{returnedSelectedVisibilityDistance}</span>
                            <span>{returnedSelectedCeilingType}</span>
                            <span>{returnedSelectedCeilingAltitude}</span>
                            <span>{returnedSelectedTemperature}</span>
                            <span>{returnedSelectedDewPoint}</span>
                            <span>{returnedSelectedAltimeter}</span>
                            <span>{returnedSelectedRWYMarking}</span>
                            <span>{returnedSelectedARFFCategory}</span>
                            <span>{returnedSelectedCurrentOnGround}</span>
                            <span>{returnedSelectedParkingMOG}</span>
                            <span>{returnedSelectedWorkingMOG}</span>
                            <span>{returnedSelectedMHEType[0]}</span>
                            <span>{returnedSelectedMHENumber[0]}</span>
                            <span>{returnedSelectedMHEType[1]}</span>
                            <span>{returnedSelectedMHENumber[1]}</span>
                            <span>{returnedSelectedFuelType[0]}</span>
                            <span>{returnedSelectedFuelQty[0]}</span>
                            <span>{returnedSelectedFuelType[1]}</span>
                            <span>{returnedSelectedFuelQty[1]}</span>
                            <span>{returnedSelectedMedLevelAvail}</span>
                            <span>{returnedSelectedITWCapability}</span>
                            <span>{returnedSelectedFrequency}</span>
                            <span>{returnedSelectedSuitabilityCode}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="NOMADButton" onClick={copyToClipboard}>{copyStatus}</button>

        </div>
    );
}

export default Topbar;
