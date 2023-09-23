//NOMAD.tsx

import Topbar from './Screens/Topbar'
import Screen1 from './Screens/Screen1'
import Screen2 from './Screens/Screen2'
import Screen3 from './Screens/Screen3'
import Screen4 from './Screens/Screen4'
import React, { useState } from 'react'

import ImportSummaryScreen from './Screens/ImportSummaryScreen'
import BottomBar from './Screens/BottomBar'

import '../../App.css';

// @ts-ignore
import SwipeableViews from 'react-swipeable-views';

function NOMAD() {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const [returnedFileContent, setReturnedFileContent] = useState('')

    const [returnedSelectedLocations, setReturnedSelectedLocations] = useState('')
    const [returnedSelectedRWYInUse, setReturnedSelectedRWYInUse] = useState('')
    const [returnedSelectedRWYWidth, setReturnedSelectedRWYWidth] = useState('')
    const [returnedSelectedDistanceAvailable, setReturnedSelectedDistanceAvailable] = useState('')
    const [returnedSelectedRWYMaterials, setReturnedSelectedRWYMaterials] = useState('')
    const [returnedSelectedRWYMarking, setReturnedSelectedRWYMarking] = useState('')
    const [returnedSelectedVisibilityDistance, setReturnedSelectedVisibilityDistance] = useState('')
    const [returnedSelectedCeilingType, setReturnedSelectedCeilingType] = useState('')
    const [returnedSelectedCeilingAltitude, setReturnedSelectedCeilingAltitude] = useState('')
    const [returnedSelectedFrequency, setReturnedSelectedFrequency] = useState('')

    const [returnedSelectedCBRPCNTable, setReturnedSelectedCBRPCNTable] = useState('')
    const [returnedSelectedCBRPCNOptions, setReturnedSelectedCBRPCNOptions] = useState('')
    const [returnedSelectedRCR, setReturnedSelectedRCR] = useState('')
    const [returnedSelectedRFF, setReturnedSelectedRFF] = useState('')

    const [returnedSelectedWindDirection, setReturnedSelectedWindDirection] = useState('')
    const [returnedSelectedWindVelocity, setReturnedSelectedWindVelocity] = useState('')
    const [returnedSelectedGustVelocity, setReturnedSelectedGustVelocity] = useState('')
    const [returnedSelectedTemperature, setReturnedSelectedTemperature] = useState('')
    const [returnedSelectedDewPoint, setReturnedSelectedDewPoint] = useState('')
    const [returnedSelectedAltimeter, setReturnedSelectedAltimeter] = useState('')
    const [returnedSelectedARFFCategory, setReturnedSelectedARFFCategory] = useState('')
    const [returnedSelectedCurrentOnGround, setReturnedSelectedCurrentOnGround] = useState('')
    const [returnedSelectedParkingMOG, setReturnedSelectedParkingMOG] = useState('')
    const [returnedSelectedWorkingMOG, setReturnedSelectedWorkingMOG] = useState('')
    const [returnedSelectedMedLevelAvail, setReturnedSelectedMedLevelAvail] = useState('')
    const [returnedSelectedITWCapability, setReturnedSelectedITWCapability] = useState('')

    const [returnedSelectedMHEType, setReturnedSelectedMHEType] = useState('')
    const [returnedSelectedMHENumber, setReturnedSelectedMHENumber] = useState('')
    const [returnedSelectedFuelType, setReturnedSelectedFuelType] = useState('')
    const [returnedSelectedFuelQty, setReturnedSelectedFuelQty] = useState('')
    const [returnedSelectedSuitabilityCode, setReturnedSelectedSuitabilityCode] = useState('')

    return (
        <div className="LandingPage">
            <Topbar
                returnedSelectedLocations={returnedSelectedLocations}
                returnedSelectedRWYInUse={returnedSelectedRWYInUse}
                returnedSelectedRWYWidth={returnedSelectedRWYWidth}
                returnedSelectedDistanceAvailable={returnedSelectedDistanceAvailable}
                returnedSelectedRWYMaterials={returnedSelectedRWYMaterials}
                returnedSelectedRWYMarking={returnedSelectedRWYMarking}
                returnedSelectedVisibilityDistance={returnedSelectedVisibilityDistance}
                returnedSelectedCeilingType={returnedSelectedCeilingType}
                returnedSelectedCBRPCNTable={returnedSelectedCBRPCNTable}
                returnedSelectedCBRPCNOptions={returnedSelectedCBRPCNOptions}
                returnedSelectedRCR={returnedSelectedRCR}
                returnedSelectedRFF={returnedSelectedRFF}
                returnedSelectedCeilingAltitude={returnedSelectedCeilingAltitude}
                returnedSelectedFrequency={returnedSelectedFrequency}
                returnedSelectedWindDirection={returnedSelectedWindDirection}
                returnedSelectedWindVelocity={returnedSelectedWindVelocity}
                returnedSelectedGustVelocity={returnedSelectedGustVelocity}
                returnedSelectedTemperature={returnedSelectedTemperature}
                returnedSelectedDewPoint={returnedSelectedDewPoint}
                returnedSelectedAltimeter={returnedSelectedAltimeter}
                returnedSelectedARFFCategory={returnedSelectedARFFCategory}
                returnedSelectedCurrentOnGround={returnedSelectedCurrentOnGround}
                returnedSelectedParkingMOG={returnedSelectedParkingMOG}
                returnedSelectedWorkingMOG={returnedSelectedWorkingMOG}
                returnedSelectedMedLevelAvail={returnedSelectedMedLevelAvail}
                returnedSelectedITWCapability={returnedSelectedITWCapability}
                returnedSelectedMHEType={returnedSelectedMHEType}
                returnedSelectedMHENumber={returnedSelectedMHENumber}
                returnedSelectedFuelType={returnedSelectedFuelType}
                returnedSelectedFuelQty={returnedSelectedFuelQty}
                returnedSelectedSuitabilityCode={returnedSelectedSuitabilityCode}
                
            />
            <div className="swipe-container">
                <SwipeableViews
                    index={activeStep}
                    onChangeIndex={handleNext} // This triggers when swiping right
                    // @ts-ignore
                    onSwitching={(index) => {
                        if (index < activeStep) handleBack(); // Trigger handleBack when swiping left
                    }}
                    enableMouseEvents
                >
                    <Screen1
                        setReturnedSelectedLocations={setReturnedSelectedLocations}
                        setReturnedSelectedRWYInUse={setReturnedSelectedRWYInUse}
                        setReturnedSelectedRWYWidth={setReturnedSelectedRWYWidth}
                        setReturnedSelectedDistanceAvailable={setReturnedSelectedDistanceAvailable}
                        setReturnedSelectedRWYMaterials={setReturnedSelectedRWYMaterials}
                        setReturnedSelectedRWYMarking={setReturnedSelectedRWYMarking}
                        setReturnedSelectedVisibilityDistance={setReturnedSelectedVisibilityDistance}
                        setReturnedSelectedCeilingType={setReturnedSelectedCeilingType}
                        setReturnedSelectedCeilingAltitude={setReturnedSelectedCeilingAltitude}
                        setReturnedSelectedFrequency={setReturnedSelectedFrequency}
                    />
                    <Screen2
                        setReturnedSelectedCBRPCNTable={setReturnedSelectedCBRPCNTable}
                        setReturnedSelectedCBRPCNOptions={setReturnedSelectedCBRPCNOptions}
                        setReturnedSelectedRCR={setReturnedSelectedRCR}
                        setReturnedSelectedRFF={setReturnedSelectedRFF}
                    />
                    <Screen3
                        setReturnedSelectedWindDirection={setReturnedSelectedWindDirection}
                        setReturnedSelectedWindVelocity={setReturnedSelectedWindVelocity}
                        setReturnedSelectedGustVelocity={setReturnedSelectedGustVelocity}
                        setReturnedSelectedTemperature={setReturnedSelectedTemperature}
                        setReturnedSelectedDewPoint={setReturnedSelectedDewPoint}
                        setReturnedSelectedAltimeter={setReturnedSelectedAltimeter}
                        setReturnedSelectedARFFCategory={setReturnedSelectedARFFCategory}
                        setReturnedSelectedCurrentOnGround={setReturnedSelectedCurrentOnGround}
                        setReturnedSelectedParkingMOG={setReturnedSelectedParkingMOG}
                        setReturnedSelectedWorkingMOG={setReturnedSelectedWorkingMOG}
                        setReturnedSelectedMedLevelAvail={setReturnedSelectedMedLevelAvail}
                        setReturnedSelectedITWCapability={setReturnedSelectedITWCapability}
                    />
                    <Screen4
                        setReturnedSelectedMHEType={setReturnedSelectedMHEType}
                        setReturnedSelectedMHENumber={setReturnedSelectedMHENumber}
                        setReturnedSelectedFuelType={setReturnedSelectedFuelType}
                        setReturnedSelectedFuelQty={setReturnedSelectedFuelQty}
                        setReturnedSelectedSuitabilityCode={setReturnedSelectedSuitabilityCode}
                    />

                </SwipeableViews>

            </div>
            <BottomBar
                handleBack={handleBack}
                handleNext={handleNext}
            />
        </div>
    );
}

export default NOMAD;
