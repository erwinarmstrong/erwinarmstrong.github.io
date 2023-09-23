//Template.js
import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import TemplateOptionMap from '../ChoiceOptions/TemplateOptionMap'


function Template({
    setReturnedSelectedTemplate,
}) {

    const [selectedTemplate, setSelectedTemplate] = useState(['*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing location ${index} to ${value}`);
        const updatedTemplate = [...selectedTemplate];
        updatedTemplate[index] = value;
        setSelectedTemplate(updatedTemplate);
    };

    setReturnedSelectedTemplate(selectedTemplate)

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label
                                className="NOMADLable">
                                Runway Width:
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedTemplate}
                                onChange={handleSelectChange(0)} // Pass the index directly
                                options={TemplateOptionMap}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Template;
