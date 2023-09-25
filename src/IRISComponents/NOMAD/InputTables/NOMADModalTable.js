import React from 'react';
import CBRComponent from './CBRComponent'
import PCNComponent from './PCNComponent'
import UnknownComponent from './UnknownComponent'

const ModalTable = ({
    locationLabel1,
    locationLabel2,
    locationLabel3,
    locationLabel4,
    RWYInUseLabel,
    distanceAvailLabel1,
    distanceAvailLabel2,
    distanceAvailLabel3,
    distanceAvailLabel4,
    RWYWidthLabel,
    RWYMaterialLabel,
    CBRPCNLabel,
    fileContent,
    CBRPCNSelectedLabel1,
    CBRPCNSelectedLabel2,
    CBRPCNSelectedLabel3,
    CBRPCNSelectedLabel4,
    CBRPCNSelectedLabel5,
    CBRPCNSelectedLabel6,
    RCRLabel,
    RFFLabel,
    windDirectionLabel,
    VisibilityDistanceLabel,
    CeilingTypeLabel,
    CeilingAltitudeLabel1,
    TemperatureLabel,
    DewPointLabel,
    RWYMarkingLabel,
    ARFFCategoryLabel,
    CurrentOnGroundLabel,
    ParkingMOGLabel,
    WorkingMOGLabel,
    MHETypeLabel1,
    MHENumberLabel1,
    MHETypeLabel2,
    MHENumberLabel2,
    FuelTypeLabel1,
    FuelQtyLabel1,
    FuelTypeLabel2,
    FuelQtyLabel2,
    MedLevelAvailLabel,
    ITWCapabilityLabel,
    FrequencyLabel1,
    FrequencyLabel2,
    FrequencyLabel3,
    FrequencyLabel4,
    FrequencyLabel5,
    FrequencyLabel6,
    SuitabilityCodeLabel1,
    SuitabilityCodeLabel2,
    SuitabilityCodeLabel3,
    SuitabilityCodeLabel4,
    SuitabilityCodeLabel5,
    SuitabilityCodeLabel6,
    SuitabilityCodeLabel7,
    SuitabilityCodeLabel8,
    SuitabilityCodeLabel9,
    SuitabilityCodeLabel10,
    SuitabilityCodeLabel11,
    SuitabilityCodeLabel12,
    SuitabilityCodeLabel13,
    SuitabilityCodeLabel14,
    SuitabilityCodeLabel15,
    SuitabilityCodeLabel16,
    SuitabilityCodeLabel17,
    SuitabilityCodeLabel18,
    SuitabilityCodeLabel19,
    SuitabilityCodeLabel20,
}) => {


    return (
        <table className='EndScreenTable' border='1'>
            <tbody>
                <tr>
                    <td>
                        Location
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
                        RWY In Use
                    </td>
                    <td>
                        <span>{RWYInUseLabel}</span>
                    </td>
                </tr>
                <tr>
                    <td>Distance Available
                    </td>
                    <td>
                        <span>{distanceAvailLabel1}</span>
                        <span>,</span>
                        <span>{distanceAvailLabel2}</span>
                        <span>{distanceAvailLabel3}</span>
                        <span>{distanceAvailLabel4}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Runway Width
                    </td>
                    <td>
                        <span>{RWYWidthLabel}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Runway Material
                    </td>
                    <td>
                        <span>{RWYMaterialLabel}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        CBR or PCN
                    </td>
                    <td>
                        <span>{CBRPCNLabel}</span>
                    </td>
                </tr>
                <tr>
                    <td colSpan='2'>
                        {fileContent[11] === 'C' && <CBRComponent
                            CBRPCNSelectedLabel1={CBRPCNSelectedLabel1}
                            CBRPCNSelectedLabel2={CBRPCNSelectedLabel2}
                            CBRPCNSelectedLabel3={CBRPCNSelectedLabel3}
                            CBRPCNSelectedLabel4={CBRPCNSelectedLabel4}
                            CBRPCNSelectedLabel5={CBRPCNSelectedLabel5}
                            CBRPCNSelectedLabel6={CBRPCNSelectedLabel6}
                        />}
                        {fileContent[11] === 'P' && <PCNComponent
                            CBRPCNSelectedLabel1={CBRPCNSelectedLabel1}
                            CBRPCNSelectedLabel2={CBRPCNSelectedLabel2}
                            CBRPCNSelectedLabel3={CBRPCNSelectedLabel3}
                            CBRPCNSelectedLabel4={CBRPCNSelectedLabel4}
                            CBRPCNSelectedLabel5={CBRPCNSelectedLabel5}
                            CBRPCNSelectedLabel6={CBRPCNSelectedLabel6}
                        />}
                        {fileContent[11] !== 'C' && fileContent[11] !== 'P' && <UnknownComponent />}
                    </td>
                </tr>
                <tr>
                    <td>
                        Runway Condition Report
                    </td>
                    <td>
                        {RCRLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Rolling Resistance Factor
                    </td>
                    <td>
                        {RFFLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Wind Direction
                    </td>
                    <td>
                        {windDirectionLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Wind Velocity
                    </td>
                    <td>
                        {fileContent[23]}{fileContent[24]}
                    </td>
                </tr>
                <tr>
                    <td>
                        Gust Velocity
                    </td>
                    <td>
                        {fileContent[25]}{fileContent[26]}
                    </td>
                </tr>
                <tr>
                    <td>
                        Visibility Distance
                    </td>
                    <td>
                        {VisibilityDistanceLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Ceiling Type
                    </td>
                    <td>
                        {CeilingTypeLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Ceiling Altitude
                    </td>
                    <td>
                        {CeilingAltitudeLabel1}
                    </td>
                </tr>
                <tr>
                    <td>
                        Temperature
                    </td>
                    <td>
                        {TemperatureLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Dew Point
                    </td>
                    <td>
                        {DewPointLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Altimeter
                    </td>
                    <td>
                        {fileContent[35]}{fileContent[36]}.{fileContent[37]}{fileContent[38]}
                    </td>
                </tr>
                <tr>
                    <td>
                        Runway Markings
                    </td>
                    <td>
                        {RWYMarkingLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Aircraft Rescue and Firefighting
                    </td>
                    <td>
                        {ARFFCategoryLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Current On Ground
                    </td>
                    <td>
                        {CurrentOnGroundLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Parking Max On Ground
                    </td>
                    <td>
                        {ParkingMOGLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Working Max On Ground
                    </td>
                    <td>
                        {WorkingMOGLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Material Handeling Equipment 1
                    </td>
                    <td>
                        {MHETypeLabel1}
                    </td>
                </tr>
                <tr>
                    <td>
                        Material Handeling Equipment 1 Quantity
                    </td>
                    <td>
                        {MHENumberLabel1}
                    </td>
                </tr>
                <tr>
                    <td>
                        Material Handeling Equipment 2
                    </td>
                    <td>
                        {MHETypeLabel2}
                    </td>
                </tr>
                <tr>
                    <td>
                        Material Handeling Equipment 2 Quantity
                    </td>
                    <td>
                        {MHENumberLabel2}
                    </td>
                </tr>
                <tr>
                    <td>
                        Fuel Type 1
                    </td>
                    <td>
                        {FuelTypeLabel1}
                    </td>
                </tr>
                <tr>
                    <td>
                        Fuel Quantity 1
                    </td>
                    <td>
                        {FuelQtyLabel1}
                    </td>
                </tr>
                <tr>
                    <td>
                        Fuel Type 2
                    </td>
                    <td>
                        {FuelTypeLabel2}
                    </td>
                </tr>
                <tr>
                    <td>
                        Fuel Quantity 2
                    </td>
                    <td>
                        {FuelQtyLabel2}
                    </td>
                </tr>
                <tr>
                    <td>
                        Medical Level Available

                    </td>
                    <td>
                        {MedLevelAvailLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Intigraded Threat Warning Capability
                    </td>
                    <td>
                        {ITWCapabilityLabel}
                    </td>
                </tr>
                <tr>
                    <td>
                        Frequency
                    </td>
                    <td>
                        {FrequencyLabel1}{FrequencyLabel2}{FrequencyLabel3}{FrequencyLabel4}{FrequencyLabel5}{FrequencyLabel6}
                    </td>
                </tr>
                <tr>
                    <td colSpan='2' align='center'>
                        Suitability Codes
                    </td>
                </tr>
                <tr>
                    <td colSpan='2'>
                        <table className='EndScreenTable'>
                            <tbody>
                                <tr>
                                    <td>
                                        {SuitabilityCodeLabel1}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel2}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel3}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel4}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel5}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {SuitabilityCodeLabel6}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel7}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel8}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel9}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel10}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {SuitabilityCodeLabel11}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel12}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel13}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel14}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel15}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {SuitabilityCodeLabel16}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel17}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel18}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel19}
                                    </td>
                                    <td>
                                        {SuitabilityCodeLabel20}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ModalTable;