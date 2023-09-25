import React from 'react';
import '../../IRISComponents/NOMAD/NOMAD.css'
import defaultOptionMap from "../../../src/IRISComponents/NOMAD/ChoiceOptions/NOMADDefaultOptionMap";
import RWYInUse from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADRWYInUseOptionMap';
import DistanceAvailableOptionMap1 from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADDistanceAvailableOptionMap'
import DistanceAvailableOptionMap2 from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADDistanceAvailableOptionMap2'
import RWYWidthOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADRWYWidthOptionMap'
import RWYMaterialOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADRWYMaterialOptionsMap';
import CBROptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADCBROptionMap'
import CBRLayerOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADCBRLayerOptionMap'
import PCNOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADPCNNumberOptionMap1'
import PCNPavementType from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADPCNPavementOptionMap'
import PCNSubgradeStrength from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADPCNSubgradeStengthOptionMap'
import PCNTirePressure from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADPCNTirePressureOptionMap'
import PCNMethod from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADPCNMethodOptionMap'
import WindDirection from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADWindDirectionOptionMap'
import RCROptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADRCROptionMap'
import RFFOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADRFFOptionMap'
import WindVelocityOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADWindVelocityOptionMap';
import GustVelocityOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADGustVelocityOptionMap';


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
                    <td>
                        <span>{getLabelFromValue(fileContent[2], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[3], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[4], defaultOptionMap)}</span>
                        <span>{getLabelFromValue(fileContent[5], defaultOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Runway In Use
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[6], RWYInUse)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Distance Available
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[7], DistanceAvailableOptionMap1)}</span>
                        <span>,</span>
                        <span>{getLabelFromValue(fileContent[8], DistanceAvailableOptionMap2)}</span>
                        <span>{getLabelFromValue(fileContent[9], DistanceAvailableOptionMap2)}</span>
                        <span>{getLabelFromValue(fileContent[10], DistanceAvailableOptionMap2)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Runway Width
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[11], RWYWidthOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Runway Material
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[12], RWYMaterialOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        CBR or PCN
                    </td>
                    <td>
                        <span>{fileContent[13] === 'C' ? 'CBR' : fileContent[13] === 'P' ? 'PCN' : 'Unknown'}</span>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        {fileContent[13] === 'C' && (
                            <>
                                <table className='EndScreenTable' border='1'>
                                    <tr>
                                        <td>
                                            California Bearing Ratio 1
                                        </td>
                                        <td>
                                            <span>{getLabelFromValue(fileContent[14], CBROptionMap)}</span>
                                        </td>
                                        <td>
                                            Layer 1
                                        </td>
                                        <td>
                                            <span>{getLabelFromValue(fileContent[15], CBRLayerOptionMap)}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            California Bearing Ratio 2
                                        </td>
                                        <td>
                                            <span>{getLabelFromValue(fileContent[16], CBROptionMap)}</span>
                                        </td>
                                        <td>
                                            Layer 2
                                        </td>
                                        <td>
                                            <span>{getLabelFromValue(fileContent[17], CBRLayerOptionMap)}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            California Bearing Ratio 3
                                        </td>
                                        <td>
                                            <span>{getLabelFromValue(fileContent[18], CBROptionMap)}</span>
                                        </td>
                                        <td>
                                            Layer 3
                                        </td>
                                        <td>
                                            <span>{getLabelFromValue(fileContent[19], CBRLayerOptionMap)}</span>
                                        </td>
                                    </tr>
                                </table>
                            </>
                        )}
                        {fileContent[13] === 'P' && (
                            <>
                                <table className='EndScreenTable' border='1'>
                                    <tr>
                                        <td colSpan={2}>
                                            Pavement Classification Number
                                        </td>
                                        <td colSpan={2}>
                                            <span>{getLabelFromValue(fileContent[14], PCNOptionMap)}</span>
                                            <span>{getLabelFromValue(fileContent[15], PCNOptionMap)}</span>
                                        </td>
                                        <td colSpan={2}>
                                            Pavement Type
                                        </td>
                                        <td colSpan={2}>
                                            <span>{getLabelFromValue(fileContent[16], PCNPavementType)}</span>
                                        </td>
                                        <td colSpan={2}>
                                            Subgrade Strength
                                        </td>
                                        <td colSpan={2}>
                                            <span>{getLabelFromValue(fileContent[17], PCNSubgradeStrength)}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            Tire Pressure
                                        </td>
                                        <td colSpan={3}>
                                            <span>{getLabelFromValue(fileContent[18], PCNTirePressure)}</span>
                                        </td>
                                        <td colSpan={3}>
                                            Method of PCN Determination
                                        </td>
                                        <td colSpan={3}>
                                            <span>{getLabelFromValue(fileContent[19], PCNMethod)}</span>
                                        </td>
                                    </tr>
                                </table>
                            </>
                        )}
                        {fileContent[13] !== 'C' || fileContent[13] !== 'P' && (
                            <>
                                <table>
                                    <tr>
                                        <td>
                                            NO CBR or PCN Option Loaded
                                        </td>
                                    </tr>
                                </table>
                            </>
                        )}
                    </td>
                </tr>
                <tr>
                    <td>
                        Runway Condition Report
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[20], RCROptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Rolling Resistance Factor
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[21], RFFOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Wind Direction
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[22] + fileContent[23] + fileContent[24], WindDirection)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Wind Velocity
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[25] + fileContent[26], WindVelocityOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Gust Velocity
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[27] + fileContent[28], GustVelocityOptionMap)}</span>
                    </td>
                </tr>
            </tbody >
        </table >
    );
};

export default ModalTable;