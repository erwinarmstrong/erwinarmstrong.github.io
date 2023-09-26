//SiteSecurity.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import SiteSecurityOptionMap from '../ChoiceOptions/NineLineSiteSecurityOptionMap'


function SiteSecurity({
    setReturnedSelectedSiteSecurity,
}) {

    const [selectedSiteSecurity, setSelectedSiteSecurity] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing SiteSecurity ${index} to ${value}`);
        const updatedSiteSecurity = [...selectedSiteSecurity];
        updatedSiteSecurity[index] = value;
        setSelectedSiteSecurity(updatedSiteSecurity);
    };

    setReturnedSelectedSiteSecurity(selectedSiteSecurity)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NineLineLable">
                                SiteSecurity
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedSiteSecurity}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={SiteSecurityOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SiteSecurity;
