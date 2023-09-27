import React from 'react';
import '../../IRISComponents/NineLine/NineLine.css'
import defaultOptionMap from "../../../src/IRISComponents/NineLine/ChoiceOptions/NineLineDefaultOptionMap";
import SpecialEquipmentRequiredOptionMap from '../../IRISComponents/NineLine/ChoiceOptions/NineLineSpecialEquipmentRequiredOptionMap'
import PrecedenceOptionMap from '../../IRISComponents/NineLine/ChoiceOptions/NineLinePrecedenceOptionMap.js'
import SiteSecurityOptionMap from '../../IRISComponents/NineLine/ChoiceOptions/NineLineSiteSecurityOptionMap'
import PickupSiteMarkings from '../../IRISComponents/NineLine/ChoiceOptions/NineLinePickUpSiteMarkingOptionMap'
import ColorOptionMap from '../../IRISComponents/NineLine/ChoiceOptions/NineLineColorOptionMap'
import ShapeOptionMap from '../../IRISComponents/NineLine/ChoiceOptions/NineLineShapeOptionMap'
import FlareOptionMap from '../../IRISComponents/NineLine/ChoiceOptions/NineLineFlareColorOptionMap'
import CoalitionForces from '../../IRISComponents/NineLine/ChoiceOptions/NineLineNationality2OptionMap'
import NonCoalitionForces from '../../IRISComponents/NineLine/ChoiceOptions/NineLineNationalityOptionMap'
import NBCContaminationOptionMap from '../../IRISComponents/NineLine/ChoiceOptions/NineLineNBCContaminationOptionMap'


const ModalTable = ({
    fileContent,
}) => {


    function getLabelFromValue(value, optionMap) {
        const option = optionMap.find(option => option.value === value);
        return option ? option.label : 'Unknown';
    }

    return (
        <table className='EndScreenTable' border='1'>
            <tbody>
                <tr>
                    <td>
                        Location
                    </td>
                    <td colSpan={2}>
                        <span>{getLabelFromValue(fileContent[2], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[3], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[4], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[5], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[6], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[7], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[8], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[9], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[10], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[11], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[12], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[13], defaultOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Frequency
                    </td>
                    <td colSpan={2}>
                        <span>{getLabelFromValue(fileContent[14], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[15], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[16], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[17], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[18], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[19], defaultOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    {fileContent[20] !== '*' && fileContent[20] !== '0' && (
                        <>
                            <td>
                                Urgent
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[20], PrecedenceOptionMap)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[21] !== '*' && fileContent[21] !== '0' && (
                        <>
                            <td>
                                Urgent Surgical
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[21], PrecedenceOptionMap)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[22] !== '*' && fileContent[22] !== '0' && (
                        <>
                            <td>
                                Priority
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[22], PrecedenceOptionMap)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[23] !== '*' && fileContent[23] !== '0' && (
                        <>
                            <td>
                                Routine
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[23], PrecedenceOptionMap)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    <td>
                        Special Equipment Needed
                    </td>
                    <td colSpan={2}>
                        <span>{getLabelFromValue(fileContent[24], SpecialEquipmentRequiredOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    {fileContent[25] !== '*' && fileContent[25] !== '0' && (
                        <>
                            <td>
                                Ambulatory
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[25], PrecedenceOptionMap)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[26] !== '*' && fileContent[26] !== '0' && (
                        <>
                            <td>
                                Litter
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[26], PrecedenceOptionMap)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    <td>
                        SiteSecurity
                    </td>
                    <td colSpan={2}>
                        <span>{getLabelFromValue(fileContent[27], SiteSecurityOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    {fileContent[28] === 'F' && (
                        <>
                            <td>
                                PickUp Site Markings
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[29], ColorOptionMap)}  </span>
                                <span>{getLabelFromValue(fileContent[28], PickupSiteMarkings)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[28] === 'P' && (
                        <>
                            <td>
                                PickUp Site Markings
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[30], ShapeOptionMap)}  </span>
                                <span>{getLabelFromValue(fileContent[29], ColorOptionMap)}  </span>
                                <span>{getLabelFromValue(fileContent[28], PickupSiteMarkings)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[28] === 'S' && (
                        <>
                            <td>
                                PickUp Site Markings
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[29], ColorOptionMap)}  </span>
                                <span>{getLabelFromValue(fileContent[28], PickupSiteMarkings)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[28] === 'X' && (
                        <>
                            <td>
                                PickUp Site Markings
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[29], FlareOptionMap)}  </span>
                                <span>{getLabelFromValue(fileContent[28], PickupSiteMarkings)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[28] === 'G' && (
                        <>
                            <td>
                                PickUp Site Markings
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[28], PickupSiteMarkings)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[28] === 'I' && (
                        <>
                            <td>
                                PickUp Site Markings
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[28], PickupSiteMarkings)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[28] === 'L' && (
                        <>
                            <td>
                                PickUp Site Markings
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[28], PickupSiteMarkings)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[28] === 'M' && (
                        <>
                            <td>
                                PickUp Site Markings
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[28], PickupSiteMarkings)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[31] !== '*' && (
                        <>
                            <td>
                                US or Coalition Military
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[31], CoalitionForces)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[32] !== '*' && (
                        <>
                            <td>
                                US or Coalition Civilian
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[32], CoalitionForces)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[33] !== '*' && (
                        <>
                            <td>
                                Non-Coalition Military
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[33], NonCoalitionForces)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[34] !== '*' && (
                        <>
                            <td>
                                Non-Coalition Civilian
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[34], NonCoalitionForces)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[35] !== '*' && (
                        <>
                            <td>
                                Enemy Prisoner of War (EPW)
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[35], NonCoalitionForces)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[36] !== '*' && (
                        <>
                            <td>
                                High-Value Target (HVT)
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[36], NonCoalitionForces)}</span>
                            </td>
                        </>
                    )}
                </tr>
                <tr>
                    {fileContent[37] !== '*' && (
                        <>
                            <td>
                                NBC Contamination
                            </td>
                            <td colSpan={2}>
                                <span>{getLabelFromValue(fileContent[37], NBCContaminationOptionMap)}</span>
                            </td>
                        </>
                    )}
                </tr>
            </tbody >
        </table >
    );
};

export default ModalTable;