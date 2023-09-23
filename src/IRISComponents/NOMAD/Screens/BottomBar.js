import React, { useState, useEffect } from 'react';
import DefaultOptionsMap from '../ChoiceOptions/NOMADDefaultOptionMap';
import RWYInUseOptionMap from '../ChoiceOptions/NOMADRWYInUseOptionMap';
import RWYWidthOptionMap from '../ChoiceOptions/NOMADRWYWidthOptionMap';
import distanceAvailOptionMap from '../ChoiceOptions/NOMADDistanceAvailableOptionMap'
import RWYMaterialOptionMap from '../ChoiceOptions/NOMADRWYMaterialOptionsMap'
import CBROptionMap from '../ChoiceOptions/NOMADCBROptionMap'
import CBRLayerOptionMap from '../ChoiceOptions/NOMADCBRLayerOptionMap'
import PCNNumberOptionMap1 from '../ChoiceOptions/NOMADPCNNumberOptionMap1'
import PCNNumberOptionMap2 from '../ChoiceOptions/NOMADPCNNumberOptionMap2'
import PCNPavementOptionMap from '../ChoiceOptions/NOMADPCNPavementOptionMap'
import PCNSubgradeStengthOptionMap from '../ChoiceOptions/NOMADPCNSubgradeStengthOptionMap'
import PCNTirePressureOptionMap from '../ChoiceOptions/NOMADPCNTirePressureOptionMap'
import PCNMethodOptionMap from '../ChoiceOptions/NOMADPCNMethodOptionMap'
import RCROptionMap from '../ChoiceOptions/NOMADRCROptionMap'
import RFFOptionMap from '../ChoiceOptions/NOMADRFFOptionMap'
import VisibilityDistanceOptionMap from '../ChoiceOptions/NOMADVisibilityDistanceOptionMap'
import CeilingTypeOptionMap from '../ChoiceOptions/NOMADCeilingTypeOptionMap'
import CeilingAltitudeOptionMap from '../ChoiceOptions/NOMADCeilingAltitudeOptionMap'
import TemperatureOptionMap from '../ChoiceOptions/NOMADTemperatureOptionMap'
import DewPointOptionMap from '../ChoiceOptions/NOMADDewPointOptionMap'
import RWYMarkingOptionMap from '../ChoiceOptions/NOMADRWYMarkingOptionMap'
import ARFFCategoryOptionMap from '../ChoiceOptions/NOMADARFFCategoryOptionMap'
import OnGroundOptionMap from '../ChoiceOptions/NOMADOnGroundOptionMap'
import MHETypeOptionMap from '../ChoiceOptions/NOMADMHETypeOptionMap'
import MHENumberOptionMap from '../ChoiceOptions/NOMADMHENumberOptionMap'
import FuelTypeOptionMap from '../ChoiceOptions/NOMADFuelTypeOptionMap'
import FuelQtyOptionMap from '../ChoiceOptions/NOMADFuelQtyOptionMap'
import MedLevelAvailOptionMap from '../ChoiceOptions/NOMADMedLevelAvailOptionMap'
import ITWCapabilityOptionMap from '../ChoiceOptions/NOMADITWCapabilityOptionMap'
import SuitabilityCodeOptionMap from '../ChoiceOptions/NOMADSuitabilityCodeOptionMap'
import WindDirectionOptionMap from '../ChoiceOptions/NOMADWindDirectionOptionMap'
import '../../../App.css'
import ModalTable from '../../../components/ModalTable';

function BottomBar({
    handleNext,
    handleBack,
}) {

    const [fileContent, setFileContent] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    function getLabelFromValue(value, optionMap) {
        const option = optionMap.find(option => option.value === value);
        return option ? option.label : 'Unknown';
    }

    const [CBRPCNSelectedLabel1, setCBRPCNSelectedLabel1] = useState('')
    const [CBRPCNSelectedLabel2, setCBRPCNSelectedLabel2] = useState('')
    const [CBRPCNSelectedLabel3, setCBRPCNSelectedLabel3] = useState('')
    const [CBRPCNSelectedLabel4, setCBRPCNSelectedLabel4] = useState('')
    const [CBRPCNSelectedLabel5, setCBRPCNSelectedLabel5] = useState('')
    const [CBRPCNSelectedLabel6, setCBRPCNSelectedLabel6] = useState('')

    const locationLabel1 = getLabelFromValue(fileContent[0], DefaultOptionsMap);
    const locationLabel2 = getLabelFromValue(fileContent[1], DefaultOptionsMap);
    const locationLabel3 = getLabelFromValue(fileContent[2], DefaultOptionsMap);
    const locationLabel4 = getLabelFromValue(fileContent[3], DefaultOptionsMap);
    const RWYInUseLabel = getLabelFromValue(fileContent[4], RWYInUseOptionMap);
    const distanceAvailLabel1 = getLabelFromValue(fileContent[5], distanceAvailOptionMap);
    const distanceAvailLabel2 = getLabelFromValue(fileContent[6], distanceAvailOptionMap);
    const distanceAvailLabel3 = getLabelFromValue(fileContent[7], distanceAvailOptionMap);
    const distanceAvailLabel4 = getLabelFromValue(fileContent[8], distanceAvailOptionMap);
    const RWYWidthLabel = getLabelFromValue(fileContent[9], RWYWidthOptionMap);
    const RWYMaterialLabel = getLabelFromValue(fileContent[10], RWYMaterialOptionMap);
    const CBRPCNLabel = fileContent[11] === 'C' ? 'CBR' :
        fileContent[11] === 'P' ? 'PCN' : 'Unknown'

    useEffect(() => {
        // Only run this when fileContent[11] changes
        if (fileContent[11] === 'C') {
            setCBRPCNSelectedLabel1(getLabelFromValue(fileContent[12], CBROptionMap));
            setCBRPCNSelectedLabel2(getLabelFromValue(fileContent[13], CBRLayerOptionMap));
            setCBRPCNSelectedLabel3(getLabelFromValue(fileContent[14], CBROptionMap));
            setCBRPCNSelectedLabel4(getLabelFromValue(fileContent[15], CBRLayerOptionMap));
            setCBRPCNSelectedLabel5(getLabelFromValue(fileContent[16], CBROptionMap));
            setCBRPCNSelectedLabel6(getLabelFromValue(fileContent[17], CBRLayerOptionMap));
        } else if (fileContent[11] === 'P') {
            setCBRPCNSelectedLabel1(getLabelFromValue(fileContent[12], PCNNumberOptionMap1));
            setCBRPCNSelectedLabel2(getLabelFromValue(fileContent[13], PCNNumberOptionMap2));
            setCBRPCNSelectedLabel3(getLabelFromValue(fileContent[14], PCNPavementOptionMap));
            setCBRPCNSelectedLabel4(getLabelFromValue(fileContent[15], PCNSubgradeStengthOptionMap));
            setCBRPCNSelectedLabel5(getLabelFromValue(fileContent[16], PCNTirePressureOptionMap));
            setCBRPCNSelectedLabel6(getLabelFromValue(fileContent[17], PCNMethodOptionMap));
        } else {
            // Handle other cases if needed
            // Reset the table if not 'C' or 'P'
        }
    }, [fileContent]);

    const RCRLabel = getLabelFromValue(fileContent[18], RCROptionMap);
    const RFFLabel = getLabelFromValue(fileContent[19], RFFOptionMap);
    const windDirectionValue = fileContent.substring(20, 23);
    const windDirectionLabel = getLabelFromValue(windDirectionValue, WindDirectionOptionMap);
    const VisibilityDistanceLabel = getLabelFromValue(fileContent[27], VisibilityDistanceOptionMap);
    const CeilingTypeLabel = getLabelFromValue(fileContent[28], CeilingTypeOptionMap);
    const CeilingAltitudeValue = fileContent.substring(29, 31);
    const CeilingAltitudeLabel1 = getLabelFromValue(CeilingAltitudeValue, CeilingAltitudeOptionMap);
    const TemperatureValue = fileContent.substring(31, 33);
    const TemperatureLabel = getLabelFromValue(TemperatureValue, TemperatureOptionMap);
    const DewPointValue = fileContent.substring(33, 35);
    const DewPointLabel = getLabelFromValue(DewPointValue, DewPointOptionMap);
    const RWYMarkingLabel = getLabelFromValue(fileContent[39], RWYMarkingOptionMap);
    const ARFFCategoryLabel = getLabelFromValue(fileContent[40], ARFFCategoryOptionMap);
    const CurrentOnGroundLabel = getLabelFromValue(fileContent[41], OnGroundOptionMap);
    const ParkingMOGLabel = getLabelFromValue(fileContent[42], OnGroundOptionMap);
    const WorkingMOGLabel = getLabelFromValue(fileContent[43], OnGroundOptionMap);
    const MHETypeLabel1 = getLabelFromValue(fileContent[44], MHETypeOptionMap);
    const MHENumberLabel1 = getLabelFromValue(fileContent[45], MHENumberOptionMap);
    const MHETypeLabel2 = getLabelFromValue(fileContent[46], MHETypeOptionMap);
    const MHENumberLabel2 = getLabelFromValue(fileContent[47], MHENumberOptionMap);
    const FuelTypeLabel1 = getLabelFromValue(fileContent[48], FuelTypeOptionMap);
    const FuelQtyLabel1 = getLabelFromValue(fileContent[49], FuelQtyOptionMap);
    const FuelTypeLabel2 = getLabelFromValue(fileContent[50], FuelTypeOptionMap);
    const FuelQtyLabel2 = getLabelFromValue(fileContent[51], FuelQtyOptionMap);
    const MedLevelAvailLabel = getLabelFromValue(fileContent[52], MedLevelAvailOptionMap);
    const ITWCapabilityLabel = getLabelFromValue(fileContent[53], ITWCapabilityOptionMap);
    const FrequencyLabel1 = getLabelFromValue(fileContent[54], DefaultOptionsMap);
    const FrequencyLabel2 = getLabelFromValue(fileContent[55], DefaultOptionsMap);
    const FrequencyLabel3 = getLabelFromValue(fileContent[56], DefaultOptionsMap);
    const FrequencyLabel4 = getLabelFromValue(fileContent[57], DefaultOptionsMap);
    const FrequencyLabel5 = getLabelFromValue(fileContent[58], DefaultOptionsMap);
    const FrequencyLabel6 = getLabelFromValue(fileContent[59], DefaultOptionsMap);
    const SuitabilityCodeLabel1 = getLabelFromValue(fileContent[60], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel2 = getLabelFromValue(fileContent[61], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel3 = getLabelFromValue(fileContent[62], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel4 = getLabelFromValue(fileContent[63], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel5 = getLabelFromValue(fileContent[64], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel6 = getLabelFromValue(fileContent[65], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel7 = getLabelFromValue(fileContent[66], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel8 = getLabelFromValue(fileContent[67], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel9 = getLabelFromValue(fileContent[68], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel10 = getLabelFromValue(fileContent[69], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel11 = getLabelFromValue(fileContent[70], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel12 = getLabelFromValue(fileContent[71], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel13 = getLabelFromValue(fileContent[72], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel14 = getLabelFromValue(fileContent[73], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel15 = getLabelFromValue(fileContent[74], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel16 = getLabelFromValue(fileContent[75], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel17 = getLabelFromValue(fileContent[76], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel18 = getLabelFromValue(fileContent[77], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel19 = getLabelFromValue(fileContent[78], SuitabilityCodeOptionMap);
    const SuitabilityCodeLabel20 = getLabelFromValue(fileContent[79], SuitabilityCodeOptionMap);



    const handleFileUpload = (event) => {
        try {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                const content = e.target.result;
                if (fileContent !== content) {
                    setFileContent(content);
                    openModal(); // Open the modal after content is loaded
                }
            };

            reader.readAsText(file);
        } catch (error) {
            // Handle the error (e.g., show an error message)
            console.error("Error uploading file:", error);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
        openModal();
    };

    const pasteAndGo = () => {
        navigator.clipboard.readText().then(text => {
            // Set the content of the modal to the clipboard text
            setFileContent(text);

            // Open the modal
            openModal(true);
        }).catch(error => {
            console.error('Error reading from clipboard:', error);
        });
    };

    return (
        <div className='NOMADBottomBar'>
            <div className="NOMADNavButtons">
                <button className="NOMADButton" onClick={handleBack}>
                    Previous
                </button>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileUpload} />
                <button className="NOMADButton" onClick={handleButtonClick}>Import NOMAD Code</button>
                <button className="NOMADButton" onClick={pasteAndGo}>Paste and Go</button>
                <button className="NOMADButton" onClick={handleNext}>
                    Next
                </button>

            </div>


            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <ModalTable
                            locationLabel1={locationLabel1}
                            locationLabel2={locationLabel2}
                            locationLabel3={locationLabel3}
                            locationLabel4={locationLabel4}
                            RWYInUseLabel={RWYInUseLabel}
                            distanceAvailLabel1={distanceAvailLabel1}
                            distanceAvailLabel2={distanceAvailLabel2}
                            distanceAvailLabel3={distanceAvailLabel3}
                            distanceAvailLabel4={distanceAvailLabel4}
                            RWYWidthLabel={RWYWidthLabel}
                            RWYMaterialLabel={RWYMaterialLabel}
                            CBRPCNLabel={CBRPCNLabel}
                            fileContent={fileContent}
                            CBRPCNSelectedLabel1={CBRPCNSelectedLabel1}
                            CBRPCNSelectedLabel2={CBRPCNSelectedLabel2}
                            CBRPCNSelectedLabel3={CBRPCNSelectedLabel3}
                            CBRPCNSelectedLabel4={CBRPCNSelectedLabel4}
                            CBRPCNSelectedLabel5={CBRPCNSelectedLabel5}
                            CBRPCNSelectedLabel6={CBRPCNSelectedLabel6}
                            RCRLabel={RCRLabel}
                            RFFLabel={RFFLabel}
                            windDirectionLabel={windDirectionLabel}
                            VisibilityDistanceLabel={VisibilityDistanceLabel}
                            CeilingTypeLabel={CeilingTypeLabel}
                            CeilingAltitudeLabel1={CeilingAltitudeLabel1}
                            TemperatureLabel={TemperatureLabel}
                            DewPointLabel={DewPointLabel}
                            RWYMarkingLabel={RWYMarkingLabel}
                            ARFFCategoryLabel={ARFFCategoryLabel}
                            CurrentOnGroundLabel={CurrentOnGroundLabel}
                            ParkingMOGLabel={ParkingMOGLabel}
                            WorkingMOGLabel={WorkingMOGLabel}
                            MHETypeLabel1={MHETypeLabel1}
                            MHENumberLabel1={MHENumberLabel1}
                            MHETypeLabel2={MHETypeLabel2}
                            MHENumberLabel2={MHENumberLabel2}
                            FuelTypeLabel1={FuelTypeLabel1}
                            FuelQtyLabel1={FuelQtyLabel1}
                            FuelTypeLabel2={FuelTypeLabel2}
                            FuelQtyLabel2={FuelQtyLabel2}
                            MedLevelAvailLabel={MedLevelAvailLabel}
                            ITWCapabilityLabel={ITWCapabilityLabel}
                            FrequencyLabel1={FrequencyLabel1}
                            FrequencyLabel2={FrequencyLabel2}
                            FrequencyLabel3={FrequencyLabel3}
                            FrequencyLabel4={FrequencyLabel4}
                            FrequencyLabel5={FrequencyLabel5}
                            FrequencyLabel6={FrequencyLabel6}
                            SuitabilityCodeLabel1={SuitabilityCodeLabel1}
                            SuitabilityCodeLabel2={SuitabilityCodeLabel2}
                            SuitabilityCodeLabel3={SuitabilityCodeLabel3}
                            SuitabilityCodeLabel4={SuitabilityCodeLabel4}
                            SuitabilityCodeLabel5={SuitabilityCodeLabel5}
                            SuitabilityCodeLabel6={SuitabilityCodeLabel6}
                            SuitabilityCodeLabel7={SuitabilityCodeLabel7}
                            SuitabilityCodeLabel8={SuitabilityCodeLabel8}
                            SuitabilityCodeLabel9={SuitabilityCodeLabel9}
                            SuitabilityCodeLabel10={SuitabilityCodeLabel10}
                            SuitabilityCodeLabel11={SuitabilityCodeLabel11}
                            SuitabilityCodeLabel12={SuitabilityCodeLabel12}
                            SuitabilityCodeLabel13={SuitabilityCodeLabel13}
                            SuitabilityCodeLabel14={SuitabilityCodeLabel14}
                            SuitabilityCodeLabel15={SuitabilityCodeLabel15}
                            SuitabilityCodeLabel16={SuitabilityCodeLabel16}
                            SuitabilityCodeLabel17={SuitabilityCodeLabel17}
                            SuitabilityCodeLabel18={SuitabilityCodeLabel18}
                            SuitabilityCodeLabel19={SuitabilityCodeLabel19}
                            SuitabilityCodeLabel20={SuitabilityCodeLabel20}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default BottomBar;