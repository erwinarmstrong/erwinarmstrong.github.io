import React, { useState } from 'react';

function Topbar({
    returnedSelectedLocations,
    returnedSelectedFrequency,
    returnedSelectedPrecedence,
    returnedSelectedSpecialEquipmentRequired,
    returnedSelectedPatientType,
    returnedSelectedSiteSecurity,
    returnedSelectedPickUpSiteMarking,
    returnedSelectedNationality,
    returnedSelectedNBCContamination,

}) {

    const [copyStatus, setCopyStatus] = useState('Copy NineLine String to Clipboard');

    const downloadTopbarContent = () => {
        const content = [
            'A',
            'B',
            returnedSelectedLocations,
            returnedSelectedFrequency,
            returnedSelectedPrecedence,
            returnedSelectedSpecialEquipmentRequired,
            returnedSelectedPatientType,
            returnedSelectedSiteSecurity,
            returnedSelectedPickUpSiteMarking,
            returnedSelectedNationality,
            returnedSelectedNBCContamination,
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
                'B',
                returnedSelectedLocations,
                returnedSelectedFrequency,
                returnedSelectedPrecedence,
                returnedSelectedSpecialEquipmentRequired,
                returnedSelectedPatientType,
                returnedSelectedSiteSecurity,
                returnedSelectedPickUpSiteMarking,
                returnedSelectedNationality,
                returnedSelectedNBCContamination,
            ].flat().join('');

            navigator.clipboard.writeText(content).then(() => {
                setCopyStatus('Copied!');
                setTimeout(() => setCopyStatus('Copy NineLine String to Clipboard'), 2000);
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
        <div className='NineLineTopbarButtons'>
            <button className="NineLineButton" onClick={downloadTopbarContent}>Export Topbar Content</button>
            <table>
                <tbody>
                    <tr>
                        <td colSpan='2'>
                            <span>{returnedSelectedLocations}</span>
                            <span>{returnedSelectedFrequency}</span>
                            <span>{returnedSelectedPrecedence}</span>
                            <span>{returnedSelectedSpecialEquipmentRequired}</span>
                            <span>{returnedSelectedPatientType}</span>
                            <span>{returnedSelectedSiteSecurity}</span>
                            <span>{returnedSelectedPickUpSiteMarking}</span>
                            <span>{returnedSelectedNationality}</span>
                            <span>{returnedSelectedNBCContamination}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="NineLineButton" onClick={copyToClipboard}>{copyStatus}</button>

        </div>
    );
}

export default Topbar;
