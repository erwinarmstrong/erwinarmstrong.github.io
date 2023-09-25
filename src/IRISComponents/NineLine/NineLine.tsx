//NineLine.tsx
import React, { useState } from 'react'

import Topbar from './Screens/Topbar'
import BottomBar from './Screens/BottomBar'
import Screen1 from './Screens/Screen1'
import Screen2 from './Screens/ScreenTemplate'
import Screen3 from './Screens/ScreenTemplate'
import Screen4 from './Screens/ScreenTemplate'

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
    const [returnedSelectedFrequency, setReturnedSelectedFrequency] = useState('')

    return (
        <div className="LandingPage">
            <Topbar
                returnedSelectedLocations={returnedSelectedLocation}
                returnedSelectedFrequency={returnedSelectedFrequency}
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
                        setReturnedSelectedLocation={setReturnedSelectedLocation}
                        setReturnedSelectedFrequency={setReturnedSelectedFrequency}
                    />
                    <Screen2
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
