//NOMAD.tsx

import React, { useState } from 'react'

import '../../App.css';
import './NOMAD.css'

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

    return (null);
}

export default NOMAD;
