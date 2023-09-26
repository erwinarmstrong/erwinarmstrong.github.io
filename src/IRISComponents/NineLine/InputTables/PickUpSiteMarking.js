import React, { useState, useEffect } from 'react';
import ChoiceSelect from '../../../Inputs/ChoiceSelect';
import PickUpSiteMarkingOptionMap from '../ChoiceOptions/NineLinePickUpSiteMarkingOptionMap';
import ColorOptionMap from '../ChoiceOptions/NineLineColorOptionMap';
import ShapeOptionMap from '../ChoiceOptions/NineLineShapeOptionMap';
import FlareColorOptionMap from '../ChoiceOptions/NineLineFlareColorOptionMap'

function PickUpSiteMarking({
    setReturnedSelectedPickUpSiteMarking,
}) {
    const [selectedPickUpSiteMarking, setSelectedPickUpSiteMarking] = useState(['*', '*', '*']);

    const handleSelectChange = (index) => (value) => {
        console.log(`Changing PickUpSiteMarking ${index} to ${value}`);
        const updatedPickUpSiteMarking = [...selectedPickUpSiteMarking];
        updatedPickUpSiteMarking[index] = value;
        setSelectedPickUpSiteMarking(updatedPickUpSiteMarking);
    };

    useEffect(() => {
        setReturnedSelectedPickUpSiteMarking(selectedPickUpSiteMarking);
    }, [selectedPickUpSiteMarking, setReturnedSelectedPickUpSiteMarking]);

    useEffect(() => {
        // Reset the second and third elements whenever selectedPickUpSiteMarking[0] changes
        setSelectedPickUpSiteMarking(prevState => [
            prevState[0],  // Keep the first element unchanged
            '*',  // Reset the second element to '*'
            '*'   // Reset the third element to '*'
        ]);
    }, [selectedPickUpSiteMarking[0]]);

    let furtherOptions = null;

    if (selectedPickUpSiteMarking[0] === 'P') {
        furtherOptions = (
            <>
                <td>
                    <ChoiceSelect
                        value={selectedPickUpSiteMarking[1]}
                        onChange={handleSelectChange(1)}
                        options={ColorOptionMap}
                    />
                </td>
                <td>
                    <ChoiceSelect
                        value={selectedPickUpSiteMarking[2]}
                        onChange={handleSelectChange(2)}
                        options={ShapeOptionMap}
                    />
                </td>
            </>
        );
    }
    if (selectedPickUpSiteMarking[0] === 'S') {
        furtherOptions = (
            <>
                <td>
                    <ChoiceSelect
                        value={selectedPickUpSiteMarking[1]}
                        onChange={handleSelectChange(1)}
                        options={ColorOptionMap}
                    />
                </td>
            </>
        );
    }
    if (selectedPickUpSiteMarking[0] === 'S') {
        furtherOptions = (
            <>
                <td>
                    <ChoiceSelect
                        value={selectedPickUpSiteMarking[1]}
                        onChange={handleSelectChange(1)}
                        options={ColorOptionMap}
                    />
                </td>
            </>
        );
    }
    if (selectedPickUpSiteMarking[0] === 'X') {
        furtherOptions = (
            <>
                <td>
                    <ChoiceSelect
                        value={selectedPickUpSiteMarking[1]}
                        onChange={handleSelectChange(1)}
                        options={FlareColorOptionMap}
                    />
                </td>
            </>
        );
    }

    return (
        <div className="InputDIV">
            <table className="InputTable">
                <tbody>
                    <tr>
                        <td>
                            <label className="NineLineLable">
                                PickUpSiteMarking
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ChoiceSelect
                                value={selectedPickUpSiteMarking[0]}
                                onChange={handleSelectChange(0)}
                                options={PickUpSiteMarkingOptionMap}
                            />
                        </td>
                        {furtherOptions}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PickUpSiteMarking;
