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
import VisibilityDistanceOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADVisibilityDistanceOptionMap'
import CeilingTypeOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADCeilingTypeOptionMap'
import CeilingAltitudeOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADCeilingAltitudeOptionMap'
import TemperatureOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADTemperatureOptionMap'
import DewPointOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADDewPointOptionMap'
import RWYMarkingsOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADRWYMarkingOptionMap'
import ARFFOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADARFFCategoryOptionMap'
import OnGroundOptionsMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADOnGroundOptionMap'
import MHETypeOptionsMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADMHETypeOptionMap';
import MHENumberOptionsMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADMHENumberOptionMap'
import FuelTypeOptionsMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADFuelTypeOptionMap'
import FuelQtyOptionsMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADFuelQtyOptionMap'
import MedLevelAvailOptionsMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADMedLevelAvailOptionMap'
import ITWCapabilityOptionsMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADITWCapabilityOptionMap'
import SuitabilityCodeOptionMap from '../../IRISComponents/NOMAD/ChoiceOptions/NOMADSuitabilityCodeOptionMap'

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
                        {(fileContent[13] !== 'C' || fileContent[13] !== 'P') && (
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
                <tr>
                    <td>
                        Visibility Distance
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[29], VisibilityDistanceOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Ceiling Type
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[30], CeilingTypeOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Ceiling Altitude
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[31] + fileContent[32], CeilingAltitudeOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Temperature
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[33] + fileContent[34], TemperatureOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Dew Point
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[35] + fileContent[36], DewPointOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Altimiter
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[37] + fileContent[38], DewPointOptionMap)}.{getLabelFromValue(fileContent[39] + fileContent[40], DewPointOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Runway Markings
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[41], RWYMarkingsOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Aircraft Rescue and Firefighting
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[42], ARFFOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <table className='EndScreenTable' border={1}>
                            <tr>
                                <td>
                                    Current On Ground
                                </td>
                                <td>
                                    Parking Max on Ground
                                </td>
                                <td>
                                    Working Max on Ground
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>{getLabelFromValue(fileContent[43], OnGroundOptionsMap)}</span>
                                </td>
                                <td>
                                    <span>{getLabelFromValue(fileContent[44], OnGroundOptionsMap)}</span>
                                </td>
                                <td>
                                    <span>{getLabelFromValue(fileContent[45], OnGroundOptionsMap)}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        Material Handeling Equip 1
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[46], MHETypeOptionsMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Equip 1 Quantity
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[47], MHENumberOptionsMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Material Handeling Equip 2
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[48], MHETypeOptionsMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Equip 1 Quantity
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[49], MHENumberOptionsMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Fuel Type 1
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[50], FuelTypeOptionsMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Fuel Quantity 1
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[51], FuelQtyOptionsMap)} lbs</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Fuel Type 2
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[52], FuelTypeOptionsMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Fuel Quantity 2
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[53], FuelQtyOptionsMap)} lbs</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Medical Level Available
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[54], MedLevelAvailOptionsMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Intigraded Threat Warning
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[55], ITWCapabilityOptionsMap)} minutes</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Frequency
                    </td>
                    <td>
                        <span>{getLabelFromValue(fileContent[56], defaultOptionMap)}
                            {getLabelFromValue(fileContent[57], defaultOptionMap)}
                            {getLabelFromValue(fileContent[58], defaultOptionMap)}
                            {getLabelFromValue(fileContent[59], defaultOptionMap)}
                            {getLabelFromValue(fileContent[60], defaultOptionMap)}
                            {getLabelFromValue(fileContent[61], defaultOptionMap)}</span>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <table className='EndScreenTable' border={1}>
                            <tr>
                                <td colSpan={5}>
                                    Suitability Codes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {getLabelFromValue(fileContent[62], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[63], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[64], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[65], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[66], SuitabilityCodeOptionMap)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {getLabelFromValue(fileContent[67], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[68], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[69], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[70], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[71], SuitabilityCodeOptionMap)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {getLabelFromValue(fileContent[72], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[73], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[74], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[75], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[76], SuitabilityCodeOptionMap)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {getLabelFromValue(fileContent[77], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[78], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[79], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[80], SuitabilityCodeOptionMap)}
                                </td>
                                <td>
                                    {getLabelFromValue(fileContent[81], SuitabilityCodeOptionMap)}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </tbody >
        </table >
    );
};

export default ModalTable;