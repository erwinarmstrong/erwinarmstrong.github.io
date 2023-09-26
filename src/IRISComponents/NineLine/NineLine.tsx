//NineLine.tsx
import React, { useState } from 'react'

import Topbar from './Screens/Topbar'
import BottomBar from './Screens/BottomBar'
import Screen1 from './Screens/Screen1'
import Screen2 from './Screens/Screen2'
import Screen3 from './Screens/ScreenTemplate'
import Screen4 from './Screens/ScreenTemplate'
import LocationInputTable from './InputTables/LocationInputTable'
import FrequencyTable from './InputTables/Frequency'


import '../../App.css';
import './NineLine.css'

// @ts-ignore
import SwipeableViews from 'react-swipeable-views';

function NineLine() {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep < 3) { // Assuming you have 4 screens (0-based index)
            setActiveStep(prevStep => prevStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) { // Assuming you start from the first screen
            setActiveStep(prevStep => prevStep - 1);
        }
    };

    const [returnedSelectedLocation, setReturnedSelectedLocation] = useState('');
    const [returnedSelectedFrequency, setReturnedSelectedFrequency] = useState('');
    const [returnedSelectedPrecedence, setReturnedSelectedPrecedence] = useState('');
    const [returnedSelectedSpecialEquipmentRequired, setReturnedSelectedSpecialEquipmentRequired] = useState('');
    const [returnedSelectedPatientType, setReturnedSelectedPatientType] = useState('');
    const [returnedSelectedSiteSecurity, setReturnedSelectedSiteSecurity] = useState('')
    const [returnedSelectedPickUpSiteMarking, setReturnedSelectedPickUpSiteMarking] = useState('')

    return (
        <div className="LandingPage">
            <Topbar
                returnedSelectedLocations={returnedSelectedLocation}
                returnedSelectedFrequency={returnedSelectedFrequency}
                returnedSelectedPrecedence={returnedSelectedPrecedence}
                returnedSelectedSpecialEquipmentRequired={returnedSelectedSpecialEquipmentRequired}
                returnedSelectedPatientType={returnedSelectedPatientType}
                returnedSelectedSiteSecurity={returnedSelectedSiteSecurity}
                returnedSelectedPickUpSiteMarking={returnedSelectedPickUpSiteMarking}
            />
            <table className='NineLineScreenTable'>
                <tbody>
                    <tr>
                        <td>
                            <LocationInputTable
                                setReturnedSelectedLocation={setReturnedSelectedLocation}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FrequencyTable
                                setReturnedSelectedFrequency={setReturnedSelectedFrequency}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="swipe-container" style={{ border: 1 }}>
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
                        setReturnedSelectedPrecedence={setReturnedSelectedPrecedence}
                        setReturnedSelectedSpecialEquipmentRequired={setReturnedSelectedSpecialEquipmentRequired}
                        setReturnedSelectedPatientType={setReturnedSelectedPatientType}
                        setReturnedSelectedSiteSecurity={setReturnedSelectedSiteSecurity}
                    />
                    <Screen2
                        setReturnedSelectedPickUpSiteMarking={setReturnedSelectedPickUpSiteMarking}
                    />
                    <Screen3
                    />
                    <>
                    </>

                </SwipeableViews>

            </div>
            <BottomBar
                handleBack={handleBack}
                handleNext={handleNext}
            />
        </div>
    );
}

export default NineLine;
